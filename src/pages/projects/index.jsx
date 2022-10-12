/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Layout, Row, Col,
} from 'antd';
// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
import Header from '../../components/PageLayout/Header';
import SEO from '../../components/Seo';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ProjectCard from '../../components/ProjectCard';
import Config from '../../../config';

const Projects = ({ data }) => {
  // const { allFile: { edges } } = data;
  // const rawProjects = data.allMarkdownRemark.edges
  //   .map((edge) => edge.node.frontmatter.projects)
  //   .reduce((prev, curr) => prev.concat(curr));
  // rawProjects
  //   .filter((project, index) => index === rawProjects.indexOf(project))
  //   .sort(); // Remove duplicates and sort values
  // // const projectPage = Config.pages.project;
  const projectData = Config.projects;
  // console.log(edges);
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title="Projects"
          description="This page consists of various Projects on various technologies that I'll be using
          to write blogs. You can check the blogs related to the projects by clicking on any of the projects below."
          path="projects"
        />
        <SidebarWrapper>
          <>
            <div className="marginTopTitle">
              <h1 className="titleSeparate">Projects</h1>
            </div>
            <Row gutter={[30, 20]}>
              {
                projectData.map((value) => (
                  <Col key={value.node.name} xs={24} sm={24} md={12} lg={8}>
                    <ProjectCard
                      img={value.src}
                      name={value.name}
                      description={value.description}
                      color={value.color}
                    />
                  </Col>
                ))
              }
            </Row>
          </>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

// Projects.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               projects: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//             }).isRequired,
//           }).isRequired,
//         }).isRequired,
//       ).isRequired,
//     }).isRequired,
//     allFile: PropTypes.shape({
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             childImageSharp: PropTypes.shape({
//               fluid: PropTypes.object.isRequired,
//             }).isRequired,
//           }).isRequired,
//         }).isRequired,
//       ).isRequired,
//     }).isRequired,
//   }).isRequired,
// };


export default Projects;
