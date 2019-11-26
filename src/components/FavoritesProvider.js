import React, { useContext } from 'react';

const FavoritesContext = React.createContext();

function useFavorites() {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  return { favorites, setFavorites };
}

const FavoritesProvider = FavoritesContext.Provider;

export { FavoritesProvider, useFavorites };
