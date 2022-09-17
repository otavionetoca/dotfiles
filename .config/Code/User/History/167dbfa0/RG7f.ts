import Block from "./Blocks";

export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  blocks: {
    loading: boolean;
    list: Block[];
  };
}
