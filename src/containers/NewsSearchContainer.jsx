/* eslint-disable keyword-spacing */
import React, { Component } from 'react';
import { fetchNews, SearchArticles } from '../services/NewsApi';
import ArticlesList from '../components/ArticlesList';
import ArticlesSearch from '../components/ArticlesSearch';

export default class NewsSearchContainer extends Component {
  state = {
    loading: true,
    articles: [],
    searchInput: '',
  };

  async componentDidMount() {
    const articles = await fetchNews();

    this.setState({
      loading: false,
      articles,
    });
  }

  onSearchInputChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const articles = await SearchArticles(this.state.searchInput);
    this.setState({
      loading: false,
      articles,
      searchInput: '',
    });
  };

  render() {
    const { articles, loading, searchInput } = this.state;
    if (loading) return <h1>Gathering Results...</h1>;
    return (
      <>
        <ArticlesSearch
          onSubmit={this.onSubmit}
          onSearchQueryChange={this.onSeachInputChange}
          searchInput={searchInput}
        />
        <ArticlesList
          articles={articles}
        />
      </>
    );
  }
}

