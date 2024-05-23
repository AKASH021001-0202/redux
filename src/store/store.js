import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducer/counter";


const store =configureStore({
  reducer:{
    countReducer,
   
  },
  devTools:true,
});

export default store;