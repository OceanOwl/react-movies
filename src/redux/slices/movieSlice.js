import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {useState} from "react";

const initialState = {
    movies: [],
    prev: null,
    next: null,
    errors: null,
    selectedMovie: null

};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id},{rejectWithValue, getState, dispatch}, {state , action}) => {
        try {
            const {data} = await movieService.getById(id)
            const state = getState();
            const {results} = action.payload
            state.selectedMovie = {results}
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, page} = action.payload
                state.movies = results;
            })
            .addCase(getById.fulfilled,(state,action)=>{
                state.selectedMovie = action.payload
                console.log(action.payload);
            })

});

const {reducer: movieReducer, actions: {setSelectedMovie}} = movieSlice;

const movieActions = {
    getAll,
    getById,
    setSelectedMovie
}

export {
    movieReducer,
    movieActions,

}
