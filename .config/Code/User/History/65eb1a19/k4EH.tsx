import { Node } from "../types/Node";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

type Props = {
  node: Node;
  expanded: boolean;
};

const Blocks: React.FC<Props> = ({ node, expanded }) => {
  return <Box display="flex" flexDirection="column"></Box>;
};

export default Blocks;
