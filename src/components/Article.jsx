import React from 'react';
import PropTypes from 'prop-types';

function Article({ article }) {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.description}</p>
      <p>{article.url}</p>
    </>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })
};

export default Article;

