import { createContext, useContext, useState } from "react";

type NodeInMemory = {
  id: string;
  label: string;
  childrenIds: string[];
  parentId: string;
};

type NodesStructure = Record<string, NodeInMemory>;

interface ITreeContext {
  nodes: NodesStructure;
  addNode: (parentNodeId: string) => void;
}

export const treeContext = createContext<ITreeContext>({
  addNode: () => {},
  nodes: {
    root: { childrenIds: [], id: "root", label: "Root", parentId: "none" },
  },
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

  return (
    <treeContext.Provider value={{ nodes: nodesStructure, addNode }}>
      {props.children}
    </treeContext.Provider>
  );
}

export const useTreeContext = () => useContext(treeContext);
