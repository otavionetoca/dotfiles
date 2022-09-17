import React from "react";
import { Node as NodeTyp } from "../types/Node";

type Props = {
  parentNode: Partial<NodeType, "">;
};

export default function Blocks({}): React.FC<Props> {
  return <div></div>;
}
