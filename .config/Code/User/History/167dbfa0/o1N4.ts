import Block from "./Block";

export interface Node {
  online: boolean;
  loading: boolean;
  name: string;
  url: string;
  loading: boolean;
  blocks: Block[];
}
