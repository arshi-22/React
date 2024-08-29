import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, API_KEY_VALUE, API_URL } from "../../common/apis/MovieApiKey";
import moviesApis from "../../common/apis/moviesApis";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchValue = "Harry") => {
    const response = await moviesApis.get(
      `${API_URL}?${API_KEY}${API_KEY_VALUE}&s=${searchValue}&type=movie`
    );
    // .catch((error) => {
    //   document.write("An error occured try after sometime");
    //   document.close();
    // });
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

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.movies = payload;
    });
    builder.addCase(fetchWebSeries.fulfilled, (state, { payload }) => {
      state.shows = payload;
    });
    // [fetchMovies.pending]: () => {
    //   console.log("Pending");
    // },
    // [fetchMovies.fulfilled]: (state, { payload }) => {
    //   return { ...state, movies: payload };
    // },
    // [fetchMovies.rejected]: () => {
    //   console.log("Rejceted");
    // },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
