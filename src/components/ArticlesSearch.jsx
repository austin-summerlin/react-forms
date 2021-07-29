import React from 'react';
import PropTypes from 'prop-types';

const ArticlesSearch = ({ search, onChange, onSubmit }) => (
  <>
    <form onSubmit={onSubmit}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="search"
        value={search}
        onChange={onChange}
        placeholder="Search"
      />
      <button aria-label="button">Search</button>
    </form>
  </>
);

ArticlesSearch.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ArticlesSearch;
