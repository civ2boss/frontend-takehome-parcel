import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { FavoritesProvider } from '../FavoritesProvider';
import FavoriteButton from '../favorite-button';

test('shows unfilled heart by default', () => {
  const result = {};
  const favorites = [];
  const setFavorites = () => {};

  const { container } = render(
    <FavoritesProvider value={{ favorites, setFavorites }}>
      <FavoriteButton result={result} />
    </FavoritesProvider>
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
    <FavoritesProvider value={{ favorites, setFavorites }}>
      <FavoriteButton result={result} />
    </FavoritesProvider>
  );

  fireEvent.click(getByLabelText(/Favorite/i));

  expect(container.querySelector('.fa-heart')).toMatchInlineSnapshot(`
    <i
      class="fal fa-heart"
    />
  `);
});
