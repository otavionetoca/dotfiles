import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { RootState } from "../../store/configureStore";
import fetch from "cross-fetch";
import Block from "../../types/Block";

export interface BlocksState {
  list: Block[];
}

export const checkNodeStatus = createAsyncThunk(
  "nodes/checkNodeStatus",
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
    builder.addCase(checkNodeStatus.pending, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node) node.loading = true;
    });
    builder.addCase(checkNodeStatus.fulfilled, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node) {
        node.online = true;
        node.loading = false;
        node.name = action.payload.node_name;
      }
    });
    builder.addCase(checkNodeStatus.rejected, (state, action) => {
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
