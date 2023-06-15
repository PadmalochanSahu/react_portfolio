import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAlbumData = createAsyncThunk("fetchData", async() => {
    let albums = await axios.get("https://jsonplaceholder.typicode.com/albums")
    return albums.data
})

const Albums = createSlice({
    name: "albums",
    initialState:{
        isLoading: false,
        isError: false,
        album: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbumData.pending, (state)=>{
            state.isLoading = true
        });
        builder.addCase(fetchAlbumData.fulfilled, (state, action) => {
           state.isLoading = false
           state.album = action.payload
        });
        builder.addCase(fetchAlbumData.rejected,(state)=>{
            state.isError = true
        });
    }
})
export default Albums.reducer;