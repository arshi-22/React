import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, API_KEY_VALUE, API_URL } from "../../common/apis/MovieApiKey";
import moviesApis from "../../common/apis/moviesApis";

const initialState = {
  movies: {},
  shows: {},
  movieOrShowDetails: {},
  searchValue: "",
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (data, { getState }) => {
    const state = getState();
    const searchKey = state.movies.searchValue
      ? state.movies.searchValue
      : "Harry";
    const response = await moviesApis.get(
      `${API_URL}?${API_KEY}${API_KEY_VALUE}&s=${searchKey}&type=movie`
    );
    return response?.data;
  }
);

export const fetchWebSeries = createAsyncThunk(
  "movies/fetchshows",
  async (data, { getState }) => {
    const state = getState();
    const searchKey = state.movies.searchValue
      ? state.movies.searchValue
      : "Friends";
    const response = await moviesApis.get(
      `${API_URL}?${API_KEY}${API_KEY_VALUE}&s=${searchKey}&type=series`
    );
    return response?.data;
  }
);

export const fetchMovieDetailsOrShows = createAsyncThunk(
  "movies/details",
  async (id) => {
    const response = await moviesApis.get(
      `${API_URL}?${API_KEY}${API_KEY_VALUE}&i=${id}&Plot=full`
    );
    return response?.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.movieOrShowDetails = {};
    },
    updateSearchKey: (state, { payload }) => {
      state.searchValue = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.movies = payload;
    });
    builder.addCase(fetchWebSeries.fulfilled, (state, { payload }) => {
      state.shows = payload;
    });
    builder.addCase(
      fetchMovieDetailsOrShows.fulfilled,
      (state, { payload }) => {
        state.movieOrShowDetails = payload;
      }
    );
  },
});

export const { removeSelectedMovieOrShow, updateSearchKey } =
  movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSearchKey = (state) => state.movies.searchValue;
export const getMovieOrShowDetails = (state) => state.movies.movieOrShowDetails;
export default movieSlice.reducer;
