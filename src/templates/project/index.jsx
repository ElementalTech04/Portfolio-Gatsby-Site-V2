/* eslint-disable react/forbid-prop-types */
/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Layout, Row, Col,
} from 'antd';
/* App imports */
import SEO from '../../components/Seo';
import Header from '../../components/PageLayout/Header';
import PostCard from '../../components/PostCard';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import style from './projects.module.less';
import { useState, useEffect } from 'react';
import { useHashNodePosts } from '../../utils/hooks';

const ProjectPage = ({ pageContext, path }) => {
  const [posts, setPosts] = useState([]);
  const [projectName, setProjectName] = useState(pageContext.name);
  const [projectPagePath, setProjectPagePath] = useState(path);
  const [projectImage, setProjectImage] = useState(pageContext.img);
  const [projectId, setProjectId] = useState(pageContext.id);
  const [projectExcerpt, setProjectExcerpt] = useState(pageContext.excerpt);
  const [hashNodeQuery, setHashNodeQuery] = useState()
  let promisedData = useHashNodePosts(projectId, 0);
  useEffect(() => {
  promisedData.then(resp => {
    setPosts(resp)
  }).catch(err => console.error(err));
  }, [promisedData]);
console.log(projectImage)
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title={projectName}
          description={`All post about ${projectName}. project.description} `}
          path={Utils.resolvePageUrl(projectPagePath)}
          keywords={[projectName]}
        />
        <SidebarWrapper>
          <div className={`marginTopTitle ${style.projectsList}`}>
            <h1>
              {projectName}
            </h1>
            <div className={style.bannerImgContainer}>
              <Img
              fluid={projectImage}
              alt={projectName}
            />
            </div>
            <h4 className="textCenter">
              {projectExcerpt}
            </h4>
          </div>
          <Row gutter={[20, 20]}>
            {posts.length > 0 ? posts.map((post, key) => (
            // eslint-disable-next-line react/no-array-index-key
              <Col key={key} xs={24} sm={24} md={12} lg={8}>
                <PostCard data={post} />
              </Col>

            )): <h1>No Posts Yet</h1>}
          </Row>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    project: PropTypes.string.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query($project: String!) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/index.md$/" }
      }
      sort: { fields: [frontmatter___title], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            excerpt
            id
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    allFile(filter: { dir: { eq: $project } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export const hashNodeQuery = `query {
  user(username: "travistech04") {
    publication {
      posts(page: 0) {
        title
        coverImage
        dateAdded
        totalReactions
        brief
        slug
      }
    }
  }
}`;

export default ProjectPage;
