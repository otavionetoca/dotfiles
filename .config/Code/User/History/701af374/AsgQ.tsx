import React, { useState, useEffect, useCallback } from "react";
import { Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";

import { Node as NodeType } from "../types/Node";
import { useAppSelector } from "../store/configureStore";
import { checkNodesStatus, selectNodes } from "../reducers/nodes";
import Node from "../components/Node";
import { getBlocksList } from "../reducers/blocks";

export const Nodes: React.FC = () => {
  const [expandedNodeURL, setExpandedNodeURL] = useState<null | string>(null);
  const dispatch = useDispatch();
  const nodes = useAppSelector(selectNodes);

  const getExpandedNodeBlocksList = useCallback(() => {
    if (expandedNodeURL) {
      dispatch(getBlocksList(expandedNodeURL));
    }
  }, [expandedNodeURL, dispatch]);

  useEffect(() => {
    dispatch(checkNodesStatus(nodes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleNodeExpanded(node: NodeType) {
    setExpandedNodeURL(node.url === expandedNodeURL ? null : node.url);
    getExpandedNodeBlocksList();
  }

  return (
    <Box paddingTop={7}>
      <Typography variant="h4" component="h1">
        <strong style={{ color: "#000" }}>Nodes</strong>
      </Typography>
      {nodes.map((node: NodeType) => (
        <Node
          node={node}
          key={node.url}
          expanded={node.url === expandedNodeURL}
          toggleNodeExpanded={toggleNodeExpanded}
        />
      ))}
    </Box>
  );
};

export default Nodes;