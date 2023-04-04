import {configureStore} from "@reduxjs/toolkit";
import photosSlice from "./slices/photosSlice";
export const store = configureStore({
    reducer: {
        photosSlice
    }
})