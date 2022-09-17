import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlocks, selectBlocks } from "../reducers/blocks/blocks";
import { Node as NodeType } from "../types/Node";

type Props = {
  expanded: boolean;
  node: NodeType;
};

const Blocks: React.FC<Props> = ({ expanded, node }) => {
  const dispatch = useDispatch();
  const blocks = useSelector(selectBlocks);

  useEffect(() => {
    dispatch(getBlocks(node.url));
  }, [expanded, dispatch, getBlocks]);

  return (
    <div>
      {JSON.stringify(expanded)} - {JSON.stringify(node)}
    </div>
  );
};

export default Blocks;