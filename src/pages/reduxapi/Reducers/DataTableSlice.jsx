import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk("fetchTodos", async () => {
    let data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data.data
})

const DataTableSlice = createSlice({
    name:"posts",
    initialState: {
        isLoading: false,
        isError: false,
        post: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
           state.isLoading = true;
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.post = action.payload
        });
        builder.addCase(fetchTodo.rejected, (state) => {
            state.isError = true
        });

    }

})
export default DataTableSlice.reducer;