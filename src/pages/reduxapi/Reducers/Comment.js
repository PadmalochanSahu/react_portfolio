import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchComments = createAsyncThunk("fetchComments", async() => {
     let commentData = await axios.get("https://jsonplaceholder.typicode.com/comments");
     return commentData.data
})

const Comment = createSlice({
    name: "comments",
    initialState: {
        isLoading: false,
        comment: null,
        isError: false      
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending,(state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchComments.fulfilled, (state, actions) => {
            state.isLoading = false
            state.comment = actions.payload 
        });
        builder.addCase(fetchComments.rejected, (state) => {
            state.isError = true
        });
    } 

})
export default Comment.reducer;
