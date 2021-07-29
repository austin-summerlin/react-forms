import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article Component', () => {
  afterEach(() => cleanup());
  it('should render an article', () => {
    const { asFragment } = render(<Article />);
    expect(asFragment()).toMatchSnapshot();
  });
});
