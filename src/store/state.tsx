export type Status = "ready" | "loading" | "error";
type loadingState = boolean | "error";
export type Loading = { words: loadingState; audio: loadingState; translations: loadingState };

export interface State {
  started: boolean;
  status: Status;
  loading: Loading;
  letters: Letter[];
  allLettersOpened: boolean;
  words: Word[];
  wordIndex: number;
  word: Word | boolean;
}

export interface Letter {
  name: string;
  opened: boolean;
}
export interface Word {
  name: string;
  audio: string | boolean;
  translation: string | boolean;
}

const letters = "abcdefghijklmnopqrstuvwxyz".split("");
export const state: State = {
  started: false,
  status: "ready",
  loading: { words: false, audio: false, translations: false },
  letters: letters.map((letter) => ({
    name: letter.toLowerCase(),
    opened: false,
  })),
  allLettersOpened: false,
  words: [],
  wordIndex: 0,
  word: false,
};

export default state;
