import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, url }) => (
  <>
    <h1>title = {title}</h1>
    <p>author = {author}</p>
    <p>url = {url}</p>
  </>
);


Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })
};

export default Article;

