import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import style from './postCard.module.less';
import Utils from '../../utils/pageUtils';

const PostCard = (props) => {
  
  return (
    <div className={style.postCard}>
      <Link to={Utils.resolvePageUrl(props.data.slug)}>
        <div
          className={style.postCardImg}
          style={{
            backgroundImage: `url(${props.data ? props.data.coverImage : ''})`,
          }}
        />
        <div className={style.mrTp20}>
          <p>
            {/* <span className={style.dateHolder}>{frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}</span> */}
          </p>
          <h3>{props.data ? props.data.title : ''}</h3>
          <p>{props.data ? props.data.breif : ''}</p>
          <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>
            
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
