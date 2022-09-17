import { BlocksState } from "./nodes";

const initialState = (): BlocksState => ({
  loading: false,
  blocks: {
    list: [],
  },
});
export default initialState;
