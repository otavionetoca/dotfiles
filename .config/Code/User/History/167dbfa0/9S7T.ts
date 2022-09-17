import { SerializedError } from "@reduxjs/toolkit";
import Block from "./Blocks";

export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  blocks: {
    error: SerializedError;
    loading: boolean;
    list: Block[];
  };
}
