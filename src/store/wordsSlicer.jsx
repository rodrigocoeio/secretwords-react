import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getWords from "./getWords";

export const getWords = createAsyncThunk("words/getWords", async () => {
  return await getWords();
});

export const wordsSlice = createSlice({
  name: "words",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWords.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getWords.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
      }
    });
    builder.addCase(getWords.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Error occured";
      }
    });
  },
});
export default wordsSlicer.reducer;
