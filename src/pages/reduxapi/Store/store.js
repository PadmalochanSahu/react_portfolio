import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducers/index";



const store = configureStore({
    reducer:{
        data :  rootReducer,
    }
})

export default store;