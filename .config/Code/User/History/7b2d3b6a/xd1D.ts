import Block from "../../types/Block";

const initialState = (): Block => ({
  loading: false,
  blocks: {
    list: [],
  },
});
export default initialState;
