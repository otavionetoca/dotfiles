import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { RootState } from "../../store/configureStore";
import fetch from "cross-fetch";
import Block from "../../types/Block";

export interface BlocksState {
  loading: boolean;
  blocks: {
    list: Block[];
  };
}

export const getBlocks = createAsyncThunk(
  "nodes/getBlocks",
  async (nodeUrlToFetchBlockFrom: string) => {
    const response = await fetch(`${nodeUrlToFetchBlockFrom}/api/v1/status`);
    const data: Block = await response.json();
    return data;
  }
);

export const nodesSlice = createSlice({
  name: "blocks",
  initialState: initialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlocks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlocks.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.blocks.list.push(action.payload);
    });
    builder.addCase(getBlocks.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectBlocks = (state: RootState) => state.nodes.list;
export default nodesSlice.reducer;
