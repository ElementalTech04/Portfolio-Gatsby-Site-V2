import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import { stripProjects, domHtml } from '../../../utils/stripProjects';

import SEO from '../../Seo';

const pageText = {
  paraOne: ``,
  paraTwo: ``,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripProjects(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Frankie', 'Rodriguez', 'FullStack developer', 'Java', 'Javascript', 'ReactJS', 'Angular', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.svg"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Philadephia, USA"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dj.svg"
            alt="turntable image"
            textH4="DJ for fun"
            textH3="Music + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.svg"
            alt="meeting image"
            textH4="Enjoys learning from others"
            textH3="It's a lifestyle"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.svg"
            alt="motorcycle image"
            textH4="Motorcyling"
            textH3="Loving riding my Bike"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="monitor.svg"
            alt="web image"
            textH4="Full Stack Software Engineer"
            textH3="Thanks to "
            textH3LinkText="Zip Code Wilmington"
            textH3Link="https://www.zipcodewilmington.com/"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="college.svg"
            alt="college image"
            textH4="Pursued a bacholors in"
            textH3="Computer Engineering"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
