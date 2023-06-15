import { combineReducers } from "@reduxjs/toolkit";


import postReducer from './DataTableSlice';
import commentReducer from './Comment';
import albumReducer from './AlbumSlice';

const rootReducer = combineReducers({
    post: postReducer,
    comment: commentReducer,
    album: albumReducer
})

export default rootReducer