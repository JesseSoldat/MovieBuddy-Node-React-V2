import {
  ALL_FAVORITES,
  ONE_FAVORITE,
  ADD_TO_FAVORITES,
  FAVORITES_LOADING,
  FAVORITES_ERR
} from "../actions/favorites";

const initialState = {
  favorites: [],
  favorite: null,
  loading: true,
  error: null
};

export default (
  state = initialState,
  { type, favorites, favorite, loading, error }
) => {
  switch (type) {
    case FAVORITES_LOADING:
      return { ...state, loading };

    case FAVORITES_ERR:
      return { ...state, loading: false, error };

    case ALL_FAVORITES:
      // console.log("ALL_FAVORITES", favorites);
      return {
        ...state,
        favorites: [...favorites],
        favorite: null,
        loading: false,
        error: null
      };

    case ADD_TO_FAVORITES:
      // console.log("ADD_TO_FAVORITES", favorite);
      return {
        ...state,
        favorites: [state.favorites, favorite],
        favorite: null,
        loading,
        error
      };

    default:
      return { ...state };
  }
};
