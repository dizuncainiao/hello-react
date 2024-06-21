import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./counterSlice.ts";

export default configureStore({
  reducer: {
    counter: couterReducer,
  },
});
