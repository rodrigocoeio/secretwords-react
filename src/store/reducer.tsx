import { createSlice } from "@reduxjs/toolkit";
import initialState, { State, Word, Letter } from "./state";

function resetOpenedLetters(state: State) {
  state.letters.forEach((letter) => {
    letter.opened = false;
  });
  state.allLettersOpened = false;
}

function getCurrentWord(state: State) {
  const wordIndex = state.wordIndex;

  return state.words[wordIndex] ? state.words[wordIndex] : false;
}

function checkAllLettersOpened(state: State) {
  if (state.word) {
    const letters = state.letters;
    const word = state.word as Word;
    const wordLetters = word.name.split("");

    return wordLetters.every((letter) => {
      const gameLetter: Letter | undefined = letters.find(
        (l) => l.name.toLowerCase() === letter.toLowerCase()
      );
      return gameLetter && gameLetter.opened;
    });
  }

  return false;
}

const reducers = {
  startGame(state: State, action: { payload: Word[] }) {
    state.started = true;
    state.words = action.payload;
    state.wordIndex = 0;
    state.word = getCurrentWord(state);
    state.status = "ready";
    resetOpenedLetters(state);
  },
  quitGame(state: State) {
    state.started = false;
  },
  previousWord(state: State) {
    if (state.wordIndex > 0) state.wordIndex--;
    state.word = getCurrentWord(state);
    resetOpenedLetters(state);
  },
  nextWord(state: State) {
    if (state.wordIndex + 1 < state.words.length) state.wordIndex++;
    state.word = getCurrentWord(state);
    resetOpenedLetters(state);
  },
  openLetter(state: State, action: { payload: Letter }) {
    const letter = state.letters.find((l) => l.name === action.payload.name);
    if (letter) {
      letter.opened = true;
      state.allLettersOpened = checkAllLettersOpened(state);
    }
  },
  loadWordAudio(
    state: State,
    action: { payload: { word: Word; audio: string | boolean } }
  ) {
    const word = state.words.find((w) => w.name === word.name);
    if (word) {
      word.audio = action.payload.audio;
    }
  },
  loadingWordAudio(state: State, action: { payload: Word }) {
    state.status = "loading-audio";
    const word = state.words.find((w) => w.name === action.payload.name);
    if (word) {
      word.audio = "loading";
    }
  },
  loadingWords(state: State) {
    state.status = "loading-words";
  },
  loadingAudio(state: State) {
    state.status = "loading-audio";
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
