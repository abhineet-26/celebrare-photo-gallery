import { useReducer, useEffect } from 'react';

type State = string[];
type Action = { type: 'TOGGLE_FAVOURITE'; payload: string };

function favouritesReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const isFavourite = state.includes(action.payload);
      if (isFavourite) {
        return state.filter(id => id !== action.payload);
      } else {
        return [...state, action.payload];
      }
    }
    default:
      return state;
  }
}

export function useFavourites() {
  const [favourites, dispatch] = useReducer(favouritesReducer, [], () => {
    try {
      const stored = localStorage.getItem('favourites');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to parse favourites from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (id: string) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id });
  };

  return { favourites, toggleFavourite };
}
