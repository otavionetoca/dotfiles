import React from "react";
import { Node as NodeType } from "../types/Node";

type Props = {
  node: NodeType;
  isNodeExpanded: boolean;
};

const Blocks: React.FC<Props> = ({ node, isNodeExpanded }) => {
  return <div></div>;
};

export default Blocks;
