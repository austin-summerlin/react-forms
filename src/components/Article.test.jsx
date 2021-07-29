/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('Atricle Component', () => {
  it('should render', () => {
    const article = {
      title: 'Test',
      author: 'Test Author',
      url: 'http://test.com',
    };

    const { asFragment } = render(<Article title={article.title} author={article.author} url={article.url} />);

    expect(asFragment).toMatchSnapshot();
  });
});
