import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice/postsSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer
  },
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
});

export default store;
