import Block from "./Blocks";

export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  block: {
    loading: boolean;
    list: Block[];
  };
}