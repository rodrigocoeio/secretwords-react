import playAudio from "@/scripts/playAudio";
import { createSlice } from "@reduxjs/toolkit";
import initialState, { State, Status, Word, Letter, Loading } from "./state";

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

function getGameStatus(state: State): Status {
  let status: Status = "ready";
  for (const load in state.loading) {
    if (state.loading[load]) status = "loading";
  }
  return status;
}

const reducers = {
  startGame(state: State, action: { payload: Word[] }) {
    state.started = true;
    state.words = action.payload;
    state.wordIndex = 0;
    state.word = getCurrentWord(state);
    state.status = "ready";
    state.loading.words = false;
    resetOpenedLetters(state);
  },
  quitGame(state: State) {
    state.started = false;
  },
  previousWord(state: State) {
    if (state.wordIndex > 0) state.wordIndex--;
    state.word = getCurrentWord(state);
    resetOpenedLetters(state);
    state.loading.audio = false;
    state.loading.translations = false;
    state.status = getGameStatus(state);
  },
  nextWord(state: State) {
    if (state.wordIndex + 1 < state.words.length) state.wordIndex++;
    state.word = getCurrentWord(state);
    resetOpenedLetters(state);
    state.loading.audio = false;
    state.loading.translations = false;
    state.status = getGameStatus(state);
  },
  openLetter(state: State, action: { payload: Letter }) {
    const word = state.word as Word;
    const letter = state.letters.find((l) => l.name === action.payload.name);
    if (letter) {
      letter.opened = true;
      state.allLettersOpened = checkAllLettersOpened(state);

      const wordHasLetter = word.name.indexOf(letter.name) >= 0;
      if (wordHasLetter) {
        playAudio("/audios/letters/" + letter.name + ".mp3", { volume: 0.5 });
      } else {
        playAudio("/audios/wrong.mpeg", { volume: 0.5 });
      }
    }
  },
  loadTranslations(state: State, action: { payload: Word[] }) {
    state.words = action.payload;
    state.word = getCurrentWord(state);
    state.loading.translations = false;
    state.status = getGameStatus(state);
  },
  loadWordAudio(
    state: State,
    action: { payload: { word: Word; audio: string | boolean } }
  ) {
    const word = state.words.find((w) => w.name === action.payload.word.name);
    if (word) {
      word.audio = action.payload.audio;
    }
    state.word = getCurrentWord(state);
    state.loading.audio = false;
    state.status = getGameStatus(state);
  },
  loadingWords(state: State) {
    state.status = "loading";
    state.loading.words = true;
  },
  loadingAudio(state: State) {
    state.status = "loading";
    state.loading.audio = true;
  },
  loadingTranslations(state: State) {
    state.status = "loading";
    state.loading.translations = true;
  },
  loadingError(state: State, action: { payload: string | undefined }) {
    const loadingState = action.payload;
    state.status = "error";
    if(loadingState && state.loading[loadingState]){
      state.loading[loadingState] = "error";
    }
  },
};

const gameSlice = createSlice({
  name: "game",
  reducers,
  initialState,
});

export const actions = gameSlice.actions;
export default gameSlice.reducer;
