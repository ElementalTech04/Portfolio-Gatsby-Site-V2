/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./config');
const utils = require('./src/utils/pageUtils');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___title]}) {
        edges {
          node {
            frontmatter {
              path
              projects
            }
            fileAbsolutePath
          }
        }
      }
    }    
  `).then((result) => {
    if (result.errors) return Promise.reject(result.errors);

    const { allMarkdownRemark } = result.data;

    /* Post pages */
    allMarkdownRemark.edges.forEach(({ node }) => {
      // Check path prefix of post
      if (node.frontmatter.path.indexOf(config.pages.blog) !== 0) {
        // eslint-disable-next-line no-throw-literal
        throw `Invalid path prefix: ${node.frontmatter.path}`;
      }

      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/templates/post/post.jsx'),
        context: {
          postPath: node.frontmatter.path,
          translations: utils.getRelatedTranslations(node, allMarkdownRemark.edges),
        },
      });
    });
    const regexForIndex = /index\.md$/;
    // Posts in default language, excluded the translated versions
    const defaultPosts = allMarkdownRemark.edges
      .filter(({ node: { fileAbsolutePath } }) => fileAbsolutePath.match(regexForIndex));

    /* project pages */
    const allProjects = [];
    defaultPosts.forEach(({ node }) => {
      node.frontmatter.projects.forEach((project) => {
        if (allProjects.indexOf(project) === -1) allProjects.push(project);
      });
    });

    allProjects
      .forEach((project) => {
        createPage({
          path: utils.resolvePageUrl(config.pages.project, project),
          component: path.resolve('src/templates/projects/index.jsx'),
          context: {
            project,
          },
        });
      });

    return 1;
  });
};
