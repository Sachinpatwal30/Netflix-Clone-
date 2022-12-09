import { deleteMovieStart, deleteMovieSuccess, deleteMoviesFailure, getMoviesFailure, getMoviesStart, getMoviesSuccess, createMovieStart, createMovieSuccess, createMoviesFailure } from "./MovieActions";
import axios from "axios";


export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch (err) {
        dispatch(getMoviesFailure());
    }
};

//CREATE MOVIE
export const createMovie = async (movieDetails, dispatch) => {
    dispatch(createMovieStart());
    try {
      const res = await axios.post("movies/" ,movieDetails , {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createMovieSuccess(res.data));
    } catch (err) {
        dispatch(createMoviesFailure());
    }
};


//DELETE_MOVIE
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axios.delete("/movies/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteMovieSuccess(id));
    } catch (err) {
        dispatch(deleteMoviesFailure);
    }
};
