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
    if (expanded) {
      setTimeout(() => {
        dispatch(getBlocks(node.url));
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded]);

  return (
    <div>
      {JSON.stringify(expanded)} - {JSON.stringify(node)} -{" "}
      {JSON.stringify(blocks)}
    </div>
  );
};

export default Blocks;
