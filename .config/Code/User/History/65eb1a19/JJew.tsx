import { Node } from "../types/Node";

type Props = {
  node: Node;
  expanded: boolean;
};

const Blocks: React.FC<Props> = ({ node, expanded }) => {
  return <div>Blocks</div>;
};

export default Blocks;
