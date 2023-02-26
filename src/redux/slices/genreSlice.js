import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services/genreService";

const initialState = {
    genres: []
}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }

    }
);
const getById = createAsyncThunk(
    'genreSlice/getById',
    async ({id}, thunkAPI)=>{
try {
    const {data}= genreService.getById(id)
    return data
}catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
}
    }
)





const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload
            })

});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAll,
    getById
}

export {
    genreReducer,
    genreActions
}