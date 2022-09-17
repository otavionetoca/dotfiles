export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  block: {
    loadgin: boolean;
    list: Block[];
  };
}
