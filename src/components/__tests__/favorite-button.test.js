import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FavoriteButton from '../favorite-button';

test('shows unfilled heart by default', () => {
  const result = {};
  const favorites = [];
  const setFavorites = () => {};

  const { container } = render(
    <FavoriteButton
      result={result}
      favorites={favorites}
      setFavorites={setFavorites}
    />
  );

  expect(container.querySelector('.fa-heart')).toMatchInlineSnapshot(`
    <i
      class="fal fa-heart"
    />
  `);
});

test('shows filled heart when clicked', () => {
  const result = {};
  const favorites = [];
  const setFavorites = () => {};

  const { container, getByLabelText } = render(
    <FavoriteButton
      result={result}
      favorites={favorites}
      setFavorites={setFavorites}
    />
  );

  fireEvent.click(getByLabelText(/Favorite/i));

  expect(container.querySelector('.fa-heart')).toMatchInlineSnapshot(`
    <i
      class="fal fa-heart"
    />
  `);
});
