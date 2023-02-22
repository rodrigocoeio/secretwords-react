type Status = "ready" | "loading-words" | "loading-audio" | "error";

export interface State {
  started: boolean;
  status: Status;
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
