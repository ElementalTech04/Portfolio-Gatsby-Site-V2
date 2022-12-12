import React from 'react';
import { Link } from 'gatsby';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import style from './projects.module.less';

const ProjectCard = (props) => {
  const {
    path, img, name, description,
  } = props;
  const projectPage = Config.pages.project;
  return (
    <Link className={style.projectCard} to={Utils.resolvePageUrl(path)}>
      <div className={style.projectCard}>
        <div
          className={style.projectImg}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
        <div className={style.pd20px}>
          <div className="textCenter">
            <h4 style={{ color: `blue` }}>
              #
              {name}
            </h4>
          </div>
          <p>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
