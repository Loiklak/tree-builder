import { createContext, useContext, useState } from "react";

export type NodeInMemory = {
  id: string;
  label: string;
  childrenIds: string[];
  parentId: string;
};

type NodesStructure = Record<string, NodeInMemory>;

interface ITreeContext {
  nodes: NodesStructure;
  addNode: (parentNodeId: string) => void;
  updateNodeLabel(nodeId: string, label: string): void;
  deleteNode(nodeId: string): void;
}

export const treeContext = createContext<ITreeContext>({
  addNode: () => {},
  nodes: {
    root: { childrenIds: [], id: "root", label: "Root", parentId: "none" },
  },
  updateNodeLabel: () => {},
  deleteNode: () => {},
});

export default function TreeContextProvider(props: React.PropsWithChildren) {
  const [nodesStructure, setNodesStructure] = useState<NodesStructure>({
    root: { childrenIds: [], id: "root", label: "Root", parentId: "none" },
  });

  console.log("nodesStructure", nodesStructure);

  const addNode = (parentNodeId: string) => {
    const newNode: NodeInMemory = {
      label: "new node",
      id: crypto.randomUUID(),
      childrenIds: [],
      parentId: parentNodeId,
    };

    setNodesStructure((nodesStructure) => {
      const updatedParentChildren = [
        ...nodesStructure[parentNodeId].childrenIds,
        newNode.id,
      ];
      return {
        ...nodesStructure,
        [parentNodeId]: {
          ...nodesStructure[parentNodeId],
          childrenIds: updatedParentChildren,
        },
        [newNode.id]: newNode,
      };
    });
  };

  const updateNodeLabel = (nodeId: string, label: string) => {
    setNodesStructure((nodesStructure) => {
      return {
        ...nodesStructure,
        [nodeId]: {
          ...nodesStructure[nodeId],
          label,
        },
      };
    });
  };

  const deleteNodeFromStructure = (
    nodeId: string,
    nodeStructure: NodesStructure
  ) => {
    nodeStructure[nodeId].childrenIds.forEach((childId) => {
      deleteNodeFromStructure(childId, nodeStructure);
    });

    const parentId = nodeStructure[nodeId].parentId;
    nodeStructure[parentId].childrenIds = nodeStructure[
      parentId
    ].childrenIds.filter((childId) => childId !== nodeId);

    delete nodeStructure[nodeId];

    return { ...nodeStructure };
  };

  const deleteNode = (nodeId: string) => {
    setNodesStructure((nodesStructure) => {
      return deleteNodeFromStructure(nodeId, nodesStructure);
    });
  };

  return (
    <treeContext.Provider
      value={{ nodes: nodesStructure, addNode, updateNodeLabel, deleteNode }}
    >
      {props.children}
    </treeContext.Provider>
  );
}

export const useTreeContext = () => useContext(treeContext);
