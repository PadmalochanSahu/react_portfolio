import { combineReducers } from "@reduxjs/toolkit";


import postReducer from './api/DataTableSlice';
import commentReducer from './api/Comment';
import albumReducer from './api/AlbumSlice';
import todoReducer from "./todo/todoSlice";

const rootReducer = combineReducers({
    post: postReducer,
    comment: commentReducer,
    album: albumReducer,
    todo: todoReducer
})

export default rootReducer