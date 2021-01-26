import React from 'react';
import PropTypes from 'prop-types';
import Seo from './Seo'

const ArticleDetailCol = props => {
  const {  data } = props;
  return (
    <>
     <div className="card-content">
        <Seo title={data.title} description={data.desc} />
        <span className="card-title">{data.title}</span>
              <p>Description: {data.desc}</p>
              <span> Content : {data.content}</span>
      </div>
    </>
  );
};

ArticleDetailCol.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  handler: PropTypes.func
};

ArticleDetailCol.defaultProps = {
  data: null,
  handler: null
};

export default ArticleDetailCol;
