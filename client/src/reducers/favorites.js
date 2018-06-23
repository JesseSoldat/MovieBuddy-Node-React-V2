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

export default (state = initialState, { type, favorite, loading, error }) => {
  switch (type) {
    case ADD_TO_FAVORITES:
      console.log("ADD_TO_FAVORITES", favorite);
      return {
        ...state,
        favorites: [state.favorites, favorite],
        loading,
        error
      };

    default:
      return { ...state };
  }
};
