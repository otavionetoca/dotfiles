import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { Node } from "../types/Node";
import { RootState } from "../store/configureStore";
import fetch from "cross-fetch";

export interface NodesState {
  list: Node[];
}

export const checkNodeStatus = createAsyncThunk(
  "nodes/checkNodeStatus",
  async (node: Node) => {
    const response = await fetch(`${node.url}/api/v1/status`);
    const data: { node_name: string } = await response.json();
    return data;
  }
);

export const checkNodesStatus = createAsyncThunk(
  "nodes/checkNodesStatus",
  async (nodes: Node[], thunkAPI) => {
    const { dispatch } = thunkAPI;
    nodes.forEach((node) => {
      dispatch(checkNodeStatus(node));
    });
  }
);

export const getBlocks = createAsyncThunk(
  "nodes/getBlocks",
  async (node: Node) => {
    const response = await fetch(`${node.url}/api/v1/blocks`);
    const data = await response.json();
    return data.data;
  }
);

export const nodesSlice = createSlice({
  name: "nodes",
  initialState: initialState().nodes as NodesState,
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
    builder.addCase(getBlocks.pending, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node) node.block.loading = true;
    });
    builder.addCase(getBlocks.fulfilled, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node) {
        node.block.loading = false;
        node.block = action.payload;
      }
    });
    builder.addCase(getBlocks.rejected, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node) {
        node.loading = false;
        node.block.error = action.error;
      }
    });
  },
});

export const selectNodes = (state: RootState) => state.nodes.list;
export default nodesSlice.reducer;