import React from "react";
import { Node as NodeType } from "../types/Node";

type Props = {
  node: NodeType;
  isNodeExpanded: boolean;
};

export default function Blocks({ node, isNodeExpanded }): React.FC<Props> {
  return <div></div>;
}
