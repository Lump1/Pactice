import { configureStore } from "@reduxjs/toolkit";
import paletteReducer from "./Slices/paletteSlice.js";
import settingsReducer from "./Slices/settingsSlice.ts"

const store = configureStore({
  reducer: {
    palette: paletteReducer,
    settings: settingsReducer,
  },
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
});

export default store;
