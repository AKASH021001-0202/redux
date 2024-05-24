import { configureStore } from "@reduxjs/toolkit";
/* import countReducer from "./reducer/counter"; */
import cartReducer from "./reducer/cart";


const store =configureStore({
  reducer:{
   
    cartReducer,
   
  },
  devTools:true,
});

export default store;