import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import preloadedState from "./state";

const store = configureStore({
  reducer,
  preloadedState,
});

export default store;
