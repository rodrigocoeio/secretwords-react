import { createSlice } from "@reduxjs/toolkit";
import initialState, { State, Word } from "./state";

const reducers = {
  startGame(state: State, action: { payload: Word[] }) {
    state.started = true;
    state.words = action.payload;
    state.status = "ready";
  },
  quitGame(state: State) {
    state.started = false;
  },
  loadingWords(state: State) {
    state.status = "loading-words";
  },
  loadingError(state: State) {
    state.status = "error";
  },
};

const gameSlice = createSlice({
  name: "game",
  reducers,
  initialState,
});

export const actions = gameSlice.actions;
export default gameSlice.reducer;
