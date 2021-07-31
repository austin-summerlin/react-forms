/* eslint-disable keyword-spacing */
import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticlesList = ({ articles }) => {
  if (articles) {
    const articleElements = articles.map(article => (
      <li
        key={article.title}
        style={{
          listStyle: 'none',
          fontSize: '.7em',
          border: '2px solid black',
          borderRadius: '5px',
          margin: '2px',
          backgroundColor: 'lightpink'
        }}>
        <Article
          title={article.title}
          author={article.author}
          url={article.url}
        />
      </li>
    ));
    return <ul>{articleElements}</ul>;
  } return <ul>Oops...something went wrong</ul>;
};

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.stringisRequired,
      author: PropTypes.string,
      url: PropTypes.string
    })
  ),
};

export default ArticlesList;
