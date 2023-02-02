import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import preloadedState from "./state";

export default configureStore({reducer, preloadedState});