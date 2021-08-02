require('dotenv').config();
import React from 'react';
import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import NewsSearchContainer from './NewsSearchContainer';
import ArticlesSearch from '../components/ArticlesSearch';

describe('News Container', () => {
  it('renders newsSearchContainer and displays earch results', async () => {
    render(<NewsSearchContainer />);
    screen.getByText('Gathering Results...');

    const mockSearch = jest.fn();
    const { queryByPlaceholderText } = render(<ArticlesSearch mockSearch={mockSearch} />);
    const searchInput = queryByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');

    return waitFor(async () => {
      const ul = await screen.findByRole('list');
      expect(ul).not.toBeEmptyDOMElement();
    }, 5000);
  });
});

