import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    photos: [],
    load: false
}

export const getPhotos = createAsyncThunk('photos', async (params) => {
    const {data} = await axios.get('https://fakestoreapi.com/products', {params})
    return data
})

const photosSlice = createSlice({
    name: 'photosSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhotos.pending, (state) => {
                state.load = false
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.photos = action.payload
                state.load = true
            })
            .addCase(getPhotos.rejected, () => {
                alert('error')
            })
}
})

export default photosSlice.reducer;
export const photosSelect = state => state.photosSlice;