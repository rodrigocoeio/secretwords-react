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
  previousWord(state: State) {
    if (state.wordIndex > 0) state.wordIndex--;
  },
  nextWord(state: State) {
    if (state.wordIndex + 1 < state.words.length) state.wordIndex++;
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
