/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Layout, Row, Col,
} from 'antd';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Header from '../../components/PageLayout/Header';
import SEO from '../../components/Seo';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ProjectCard from '../../components/ProjectCard';
import Config from '../../../config';

const Blog = ({ data }) => {
  console.log(dat)
  const { allFile: { edges } } = data;
  const rawBlog = data.allMarkdownRemark.edges
    .map((edge) => edge.node.frontmatter.title)
    .reduce((prev, curr) => prev.concat(curr));
  rawBlog
    .filter((title, index) => index === rawBlog.indexOf(title))
    .sort(); // Remove duplicates and sort values
  const blogPage = Config.pages.blog;
  const blogData = Config.blog;
  console.log(edges);
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title="Blog"
          description="This page consists various Blog on various technologies that I have worked on over the course of my career. You can read more about the blog by clicking on any of the cards below."
          path="blog"
        />
        <SidebarWrapper>
          <>
            <div className="marginTopTitle">
              <h1 className="titleSeparate">Blog</h1>
            </div>
            <Row gutter={[30, 20]}>
              {
                blogData.map((value) => (
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

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              blog: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
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
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};


export default Blog;
