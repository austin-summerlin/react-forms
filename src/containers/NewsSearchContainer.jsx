import React, { Component } from 'react'
import Article from '../components/Article';
import ArticlesList from '../components/ArticlesList';
import ArticlesSearch from '../components/ArticlesSearch';

export default class NewsSearchContainer extends Component {
  state = {

  };

  render() {
    const { } = this.state;

    return (
      <>
        <ArticlesSearch
        />
        <ArticlesList
        />
        <Article
        />
      </>
    )
  }
}

