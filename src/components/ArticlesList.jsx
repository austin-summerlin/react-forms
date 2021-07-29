import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

function ArticlesList({ articles }) {
  return (
    <ul aria-label="articles">
      {articles.map(article => {
        return (
          <li
            key={article.url}
            style={{
              listStyle: 'none',
              border: '1px solid pink',
              borderRadius: '5px',
              margin: '2px',
              width: '50%',
              backgroundColor: 'lightpink'
            }}
          >
            <Article article={article} />
          </li>
        );
      })}
    </ul>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default ArticlesList;



