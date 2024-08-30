import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, API_KEY_VALUE, API_URL } from "../../common/apis/MovieApiKey";
import moviesApis from "../../common/apis/moviesApis";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchValue = "Harry") => {
    const response = await moviesApis.get(
      `${API_URL}?${API_KEY}${API_KEY_VALUE}&s=${searchValue}&type=movie`
    );
    return response?.data;
  }
);

export const fetchWebSeries = createAsyncThunk(
  "movies/fetchshows",
  async (searchValue = "Friends") => {
    const response = await moviesApis.get(
      `${API_URL}?${API_KEY}${API_KEY_VALUE}&s=${searchValue}&type=series`
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

const initialState = {
  movies: {},
  shows: {},
  movieOrShowDetails: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.movieOrShowDetails = {};
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

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetails = (state) => state.movies.movieOrShowDetails;
export default movieSlice.reducer;
