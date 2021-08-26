import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="Javascript"
        />
        <ProgressBar
          percent={75}
          text="ReactJS / Gatsby"
        />
        <ProgressBar
          percent={80}
          text="Jenkins / CICD"
        />
        <ProgressBar
          percent={75}
          text="Heroku / Digital Ocean / AWS"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={90}
          text="Java / Spring"
        />
        <ProgressBar
          percent={90}
          text="MYSQL / PostGreSQL"
        />
        <ProgressBar
          percent={67}
          text="Blockchain"
        />
        <ProgressBar
          percent={90}
          text="Wordpress"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
