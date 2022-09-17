import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { RootState } from "../../store/configureStore";
import fetch from "cross-fetch";
import Block from "../../types/Block";

export interface BlocksState {
  loading: boolean;
  list: Block[];
}

export const getBlocks = createAsyncThunk(
  "nodes/getBlocks",
  async (nodeUrlToFetchBlockFrom: string) => {
    const response = await fetch(`${nodeUrlToFetchBlockFrom}/api/v1/blocks`);
    const data = await response.json();
    return data.data;
  }
);

export const blocksSlice = createSlice({
  name: "blocks",
  initialState: initialState() as BlocksState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlocks.pending, (state, action) => {
      console.log(action.meta);
      state = {
        ...state,
        [action.meta.arg]: {
          loading: true,
        },
      };
    });
    builder.addCase(getBlocks.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.list = action.payload;
    });
    builder.addCase(getBlocks.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectBlocks = (state: RootState) => state.blocks;
export default blocksSlice.reducer;
