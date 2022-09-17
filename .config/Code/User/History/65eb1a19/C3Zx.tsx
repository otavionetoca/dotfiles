import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlocks, selectBlocks } from "../reducers/nodes";
import { Node } from "../types/Node";

type Props = {
  node: Node;
  expanded: boolean;
};

const Blocks: React.FC<Props> = ({ node, expanded }) => {
  const dispatch = useDispatch();
  const blocks = useSelector(selectBlocks);

  useEffect(() => {
    dispatch(getBlocks(node));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>{JSON.stringify(blocks)}</div>;
};

export default Blocks;
