import { BlocksState } from "./blocks";

const initialState = (): BlocksState => ({
  loading: false,
  blocks: {
    list: [],
  },
});
export default initialState;
