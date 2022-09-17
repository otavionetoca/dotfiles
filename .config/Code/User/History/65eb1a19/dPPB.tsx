type Props = {
  expanded: boolean;
};

const Blocks: React.FC<Props> = ({ expanded }) => {
  return <div>{JSON.stringify(expanded)}</div>;
};
