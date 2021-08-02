import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, url }) => (
  <>
    <h1>{title}</h1>
    <p>{author}</p>
    <a href={url}>Read more</a>
  </>
);

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,

};

export default Article;

