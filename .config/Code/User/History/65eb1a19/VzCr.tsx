import React from "react";
import { useDispatch } from "react-redux";
import { Node as NodeType } from "../types/Node";

type Props = {
  node: NodeType;
  isNodeExpanded: boolean;
};

const Blocks: React.FC<Props> = ({ node, isNodeExpanded }) => {
  const dispatch = useDispatch();

  return <div></div>;
};

export default Blocks;
