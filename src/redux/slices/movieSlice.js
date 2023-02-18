import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
    prev: null,
    next: null,
    errors:null

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
    async ({id}, thunkAPI) => {
        try {
            await movieService.getById(id)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
                // state.movies = items
                // state.prev = prev
                // state.next = next
            })

});

const {reducer: movieReducer} = movieSlice;

const movieActions={
    getAll,
    getById
}

export {
    movieReducer,
    movieActions,

}
