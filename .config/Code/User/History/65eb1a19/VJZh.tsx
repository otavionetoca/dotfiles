import { Node } from "../types/Node";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBlocks } from "../reducers/nodes";

type Props = {
  node: Node;
  expanded: boolean;
};

const Blocks: React.FC<Props> = ({ node, expanded }) => {
  const dispatch = useDispatch();
  console.log("rerendering");

  useEffect(() => {
    if (expanded) {
      dispatch(getBlocks(node));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Box display="flex" flexDirection="column"></Box>;
};

export default Blocks;
