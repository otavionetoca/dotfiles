import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { RootState } from "../../store/configureStore";
import fetch from "cross-fetch";
import Block from "../../types/Block";
import { Node as NodeType } from "../../types/Node";

export interface BlocksState {
  list: Block[];
}

export const getBlocksList = createAsyncThunk(
  "blocks/getList",
  async (url: string) => {
    const response = await fetch(`${url}/api/v1/blocks`);
    console.log('response: ', url, response)
    const data: { node_name: string } = await response.json();
    return data;
  }
);

export const blocksSlice = createSlice({
  name: "blocks",
  initialState: initialState().blocks as BlocksState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlocksList.pending, (state, action) => {
      console.log('pending')
      // const block = state.list.find((n) => n.url === action.meta.arg.url);
      // if (block) block.loading = true;
    });
    builder.addCase(getBlocksList.fulfilled, (state, action) => {
      // const block = state.list.find((n) => n.url === action.meta.arg.url);
      console.log('down here on fullfilled: ', state)
      // if (block) {
        // block.loading = false;
        // block.name = action.payload.node_name;
      // }
    });
    builder.addCase(getBlocksList.rejected, (state, action) => {
      console.log('rejected')
      // const block = state.list.find((n) => n.url === action.meta.arg.url);
      // if (block) {
      //   block.loading = false;
      // }
    });
  },
});

export const selectBlocks = (state: RootState) => state.blocks.list;
export default blocksSlice.reducer;