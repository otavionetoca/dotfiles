import React from "react";
import { Node as NodeType } from "../types/Node";

type Props = {
  parentNode: Partial<NodeType, "url">;
};

export default function Blocks({}): React.FC<Props> {
  return <div></div>;
}
