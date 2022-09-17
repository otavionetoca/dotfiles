import { useEffect } from "react";
import { Node as NodeType } from "../types/Node";

type Props = {
  expanded: boolean;
  node: NodeType;
};

const Blocks: React.FC<Props> = ({ expanded, node }) => {
  useEffect(() => {
    console.log("here: ", expanded);
  }, [expanded]);

  return (
    <div>
      {JSON.stringify(expanded)} - {JSON.stringify(node)}
    </div>
  );
};

export default Blocks;
