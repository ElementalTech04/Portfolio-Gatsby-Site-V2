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

const ProjectPage = ({ data, pageContext }) => {
  const { project } = pageContext;
  const projectName = Config.projects[project].name || Utils.capitalize(project);
  const projectPagePath = Config.pages.project;
  const projectImage = data.allFile.edges.find((edge) => edge.node.name === project).node
    .childImageSharp.fluid;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title={projectName}
          description={`All post about ${projectName}. ${Config.projects[project].description} `}
          path={Utils.resolvePageUrl(projectPagePath, project)}
          keywords={[projectName]}
        />
        <SidebarWrapper>
          <div className={`marginTopTitle ${style.projectsList}`}>
            <h1>
              #
              {projectName}
            </h1>
            <div className={style.bannerImgContainer}>
              <Img className={style.bannerImg} fluid={projectImage} alt={projectName} />
            </div>
            <h4 className="textCenter">
              {Config.projects[project].description}
            </h4>
          </div>
          <Row gutter={[20, 20]}>
            {posts.map((post, key) => (
            // eslint-disable-next-line react/no-array-index-key
              <Col key={key} xs={24} sm={24} md={12} lg={8}>
                <PostCard data={post} />
              </Col>
            ))}
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
    allFile(filter: { name: { eq: $project }, dir: { regex: "/projects$/" } }) {
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

export default ProjectPage;
