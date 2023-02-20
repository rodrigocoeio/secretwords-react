import { createSlice } from "@reduxjs/toolkit";
import initialState, {State} from "./state";

const reducers = {
    startGame(state:State) {
        state.started = true;
    },
    quitGame(state:State) {
        state.started = false;
    }
};

const gameSlice = createSlice({
  name: "game",
  reducers,
  initialState
});


export const actions = gameSlice.actions;
export default gameSlice.reducer;
