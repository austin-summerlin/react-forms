import React from 'react';
import PropTypes from 'prop-types';

function Article({ article }) {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.description}</p>
      <p>{article.url}</p>
      <img
        src={article.image}
        alt={article.title}
        style={{
          width: '200px',
          border: '1px solid black',
          borderRadius: '2px',
          margin: '5px',
        }}
      />
    </>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string,
  })
};

export default Article;

