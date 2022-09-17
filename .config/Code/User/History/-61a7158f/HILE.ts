import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { RootState } from "../../store/configureStore";
import fetch from "cross-fetch";
import Block from "../../types/Block";

export interface BlocksState {
  list: Block[];
  loading: false;
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
  name: "nodes",
  initialState: initialState().nodes as BlocksState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlocks.pending, (state, action) => {
      block;
    });
    builder.addCase(getBlocks.fulfilled, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node) {
        node = false;
        node.name = action.payload.node_name;
      }
    });
    builder.addCase(getBlocks.rejected, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node) {
        node.online = false;
        node.loading = false;
      }
    });
  },
});

export const selectBlocks = (state: RootState) => state.nodes.list;
export default nodesSlice.reducer;
