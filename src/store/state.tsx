type Status = "ready" | "loading-words" | "error";

export interface State {
  started: boolean;
  status: Status;
  words: {
    name: string;
    audio: string | boolean;
    translation: string | boolean;
  }[];
}

export const state: State = {
  started: false,
  status: "ready",
  words: [],
};

export default state;
