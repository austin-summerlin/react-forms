/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import ArticlesList from './ArticlesList';

describe('ArticlesList component', () => {
  it('should render component', () => {
    const articles = [{
      title: 'test',
      author: 'test',
      url: 'test',
    }];

    const { asFragment } = render(<ArticlesList articles={articles} />);

    expect(asFragment).toMatchSnapshot();
  });
});
