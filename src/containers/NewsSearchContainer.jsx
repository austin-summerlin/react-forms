/* eslint-disable keyword-spacing */
import React, { Component } from 'react';
import { fetchNews, SearchArticles } from '../services/NewsApi';
import ArticlesList from '../components/ArticlesList';
import ArticlesSearch from '../components/ArticlesSearch';

export default class NewsSearchContainer extends Component {
  state = {
    searchInput: '',
    articles: [],
    loading: true,
    initialLoad: true,
  };

  async componentDidMount() {
    const articles = await fetchNews();
    this.setState({
      articles,
      loading: false,
    });
  }

  handleChange = (target) => {
    this.setState({ searchInput: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ articles, loading: true });
    const articles = await SearchArticles(this.state.search);
    this.setState({
      articles,
      loading: false,
      initialLoad: false,
    });
  };

  render() {
    const { articles, loading, searchInput, initialLoad } = this.state;
    if (loading) return <h1>Gathering Results...</h1>;
    return (
      <div>
        <ArticlesSearch
          search={searchInput}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        {initialLoad
          ? <h1>Gathering Results...</h1>
          : <h1>Here are you results for {searchInput}</h1>
        }
        <ArticlesList search={searchInput} articles={articles} />
      </div>
    );
  }
}

