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
              title
              cover {
                absolutePath
              }
            }
            fileAbsolutePath
          }
        }
      }
    }    
  `).then((result) => {
    if (result.errors) return Promise.reject(result.errors);

    const { allMarkdownRemark } = result.data;

    /* Project pages */
    allMarkdownRemark.edges.forEach(({ node }) => {
      // Check path prefix of post
      if (node.frontmatter.path.indexOf(config.pages.project) !== 0) {
        // eslint-disable-next-line no-throw-literal
        throw `Invalid path prefix: ${node.frontmatter.path}`;
      }

      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/templates/project/index.jsx'),
        context: {
          name: node.frontmatter.title,
          img: node.frontmatter.cover.absolutePath,
          postPath: node.frontmatter.path,
          translations: utils.getRelatedTranslations(node, allMarkdownRemark.edges),
        },
      });
    });
    const regexForIndex = /index\.md$/;
    // Posts in default language, excluded the translated versions
    const defaultPosts = allMarkdownRemark.edges
      .filter(({ node: { fileAbsolutePath } }) => fileAbsolutePath.match(regexForIndex));
      console.log(JSON.stringify(defaultPosts))
    /* project pages */
    const allPosts = [];
    defaultPosts.forEach(({ node }) => {
      
      if(allPosts.length == 0){
        allPosts.push(node)
      } else {
        allPosts.forEach((project) => {
          if(project.fileAbsolutePath.match((node.fileAbsolutePath) === -1)) allPosts.push(node);
        });
      }
    });
    console.log(JSON.stringify(allPosts))
    allPosts
      .forEach((project) => {
        createPage({
          path: utils.resolvePageUrl(project.frontmatter.path),
          component: path.resolve('src/templates/project/index.jsx'),
          context: {
            project: project.fileAbsolutePath,
            projectSlug: project.frontmatter.path
          }
        });
      });

    return 1;
  });
};
