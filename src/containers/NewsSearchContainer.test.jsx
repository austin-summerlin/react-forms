require('dotenv').config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearchContainer from './NewsSearchContainer';

describe('News Container', () => {
  it('renders news container', async () => {
    render(<NewsSearchContainer />);

    screen.getByText('Gathering Results...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});

