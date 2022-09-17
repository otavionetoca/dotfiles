import { Node as NodeType } from "../types/Node";

type Props = {
  expanded: boolean;
  node: NodeType;
};

const Blocks: React.FC<Props> = ({ expanded, node }) => {
  return (
    <div>
      {JSON.stringify(expanded)} - {JSON.stringify(node)}
    </div>
  );
};

export default Blocks;
