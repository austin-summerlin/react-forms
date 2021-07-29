import React from 'react';
import PropTypes from 'prop-types';

const ArticlesSearch = ({ searchInput, onSearchInputChange, onSubmit }) => (
  <>
    <form onSubmit={onSubmit}>
      <label htmlFor="searchInput">Search</label>
      <input
        id="searchInput"
        type="text"
        value={searchInput}
        onChange={onSearchInputChange}
        placeholder="Search"
      />
      <button type="submit" aria-label="get-articles">Search</button>
    </form>
  </>
);

ArticlesSearch.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ArticlesSearch;
