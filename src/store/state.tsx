type Status = "ready" | "loading-words" | "error";

export interface Word {
  name: string;
  audio: string | boolean;
  translation: string | boolean;
}

export interface State {
  started: boolean;
  status: Status;
  words: Word[];
  wordIndex: number;
}

export const state: State = {
  started: false,
  status: "ready",
  words: [],
  wordIndex: 0
};

export default state;
