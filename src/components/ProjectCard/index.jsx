import React from 'react';
import { Link } from 'gatsby';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import style from './projects.module.less';

const ProjectCard = (props) => {
  const {
    img, name, description, color,
  } = props;
  const projectPage = Config.pages.project;
  return (
    <Link className={style.projectCard} to={Utils.resolvePageUrl(projectPage, name)}>
      <div className={style.projectCard}>
        <div
          className={style.projectImg}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
        <div className={style.pd20px}>
          <div className="textCenter">
            <h4 style={{ color: `${color}` }}>
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
