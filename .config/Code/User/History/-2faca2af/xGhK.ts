import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { RootState } from "../../store/configureStore";
import fetch from "cross-fetch";
import Block from "../../types/Block";

export interface BlocksState {
  list: Block[];
}

export const checkNodeStatus = createAsyncThunk(
  "blocks/getList",
  async (block: Block) => {
    const response = await fetch(`${block.url}/api/v1/blocks`);
    console.log(response)
    const data: { node_name: string } = await response.json();
    return data;
  }
);

export const nodesSlice = createSlice({
  name: "blocks",
  initialState: initialState().blocks as BlocksState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkNodeStatus.pending, (state, action) => {
      const block = state.list.find((n) => n.url === action.meta.arg.url);
      if (block) block.loading = true;
    });
    builder.addCase(checkNodeStatus.fulfilled, (state, action) => {
      const block = state.list.find((n) => n.url === action.meta.arg.url);
      if (block) {
        block.online = true;
        block.loading = false;
        block.name = action.payload.node_name;
      }
    });
    builder.addCase(checkNodeStatus.rejected, (state, action) => {
      const block = state.list.find((n) => n.url === action.meta.arg.url);
      if (block) {
        block.online = false;
        block.loading = false;
      }
    });
  },
});

export const selectNodes = (state: RootState) => state.nodes.list;
export default nodesSlice.reducer;
