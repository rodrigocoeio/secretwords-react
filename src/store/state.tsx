type Status = "ready" | "loading-words" | "error";

export interface State {
  started: boolean;
  status: Status;
  letters: Letter[];
  words: Word[];
  wordIndex: number;
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
  words: [],
  wordIndex: 0,
};

export default state;
