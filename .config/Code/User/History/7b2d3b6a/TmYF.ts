import Block from "../../types/Block";

const initialState = (): Block => ({
  loading: false,
    list: Block[],
});
export default initialState;
