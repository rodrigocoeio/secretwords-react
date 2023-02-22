import { createSlice } from "@reduxjs/toolkit";
import initialState, { State } from "./state";

const reducers = {
  loadingWords(state: State) {
    state.status = "loading-words";
  },
  startGame(state: State, action: any) {
    state.started = true;
    state.words = action.payload;
    state.status = "ready";
  },
  quitGame(state: State) {
    state.started = false;
  },
};

const gameSlice = createSlice({
  name: "game",
  reducers,
  initialState,
});

export const actions = gameSlice.actions;
export default gameSlice.reducer;
