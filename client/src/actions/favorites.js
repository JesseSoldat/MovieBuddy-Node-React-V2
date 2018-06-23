import axios from "axios";

import errMessage from "./utils/errMessage";

export const ALL_FAVORITES = "ALL_FAVORITES";
export const ONE_FAVORITE = "ONE_FAVORITE";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const FAVORITES_LOADING = "FAVORITES_LOADING";
export const FAVORITES_ERR = "FAVORITES_ERR";

export const addToFavorites = favorite => ({
  type: ADD_TO_FAVORITES,
  favorite,
  loading: false,
  err: null
});

export const startAddToFavorites = m => async dispatch => {
  dispatch({ type: FAVORITES_LOADING, loading: true });
  const id = m.id || m.movieid;
  const movie = {
    movieid: id,
    title: m.title || "",
    poster_path: m.image || ""
  };

  try {
    const res = await axios.post("/api/favorites/movies", movie);
    dispatch(addToFavorites(res.data));
  } catch (err) {
    dispatch({ type: FAVORITES_ERR, error: errMessage("post", "favorites") });
  }
};
