import React from 'react';
import PropTypes from 'prop-types';

const ArticlesSearch = ({ search, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="search">Search</label>
    <input
      id="search"
      type="search"
      name="search"
      placeholder="Search"
      value={search}
      onChange={onChange}
    />
    <button>Search</button>
  </form>
);

ArticlesSearch.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default ArticlesSearch;
