import { createSlice } from "@reduxjs/toolkit";
import initialState, { State, Word, Letter } from "./state";

function resetOpenedLetters(letters) {
  letters.forEach((letter) => {
    letter.opened = false;
  });
}

const reducers = {
  startGame(state: State, action: { payload: Word[] }) {
    state.started = true;
    state.words = action.payload;
    state.status = "ready";
    resetOpenedLetters(state.letters);
  },
  quitGame(state: State) {
    state.started = false;
  },
  previousWord(state: State) {
    if (state.wordIndex > 0) state.wordIndex--;
    resetOpenedLetters(state.letters);
  },
  nextWord(state: State) {
    if (state.wordIndex + 1 < state.words.length) state.wordIndex++;
    resetOpenedLetters(state.letters);
  },
  openLetter(state: State, action: { payload: Letter }) {
    const letter = state.letters.find(
      (l) => l.name === action.payload.name
    );
    if (letter) letter.opened = true;
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
