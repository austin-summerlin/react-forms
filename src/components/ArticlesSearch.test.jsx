/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import ArticlesSearch from './ArticlesSearch';

describe('Article Search Component', () => {
  it('should render the component', () => {
    const search = 'berlin';
    const { asFragment } = render(<ArticlesSearch ArticlesSearch={search} />);

    expect(asFragment).toMatchSnapshot();
  });
});
