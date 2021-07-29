/* eslint-disable keyword-spacing */
import React, { Component } from 'react';
import { fetchNews, SearchArticles } from '../services/NewsApi';
import ArticlesList from '../components/ArticlesList';
import ArticlesSearch from '../components/ArticlesSearch';

export default class NewsSearchContainer extends Component {
  state = {
    articles: [],
    search: 'berlin',
    loading: true,
  };

  async componentDidMount() {
    const articles = await fetchNews();
    this.setState({
      articles,
      loading: false,
    });
  }

  handleChange = (target) => {
    this.setState({ search: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const articles = await SearchArticles(this.state.searchInput);
    this.setState({
      articles,
      searchInput: '',
      loading: false,
    });
  };

  render() {
    const { articles, loading, search } = this.state;
    if (loading) return <h1>Gathering Results...</h1>;
    return (
      <>
        <ArticlesSearch
          search={search}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <ArticlesList
          articles={articles}
        />
      </>
    );
  }
}

