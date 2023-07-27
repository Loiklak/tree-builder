import { TreeNode } from "@/routes/_index";
import { FC, useState } from "react";
import { Block } from "./Block";
import { ArcherElement } from "react-archer";
import { useTreeContext } from "./TreeContext";

interface Props {
  nodeId: string;
}

export const TreeNodeRenderer: FC<Props> = ({ nodeId }) => {
  const { addNode, nodes } = useTreeContext();
  const node = nodes[nodeId];
  const childrens = node.childrenIds;

  const addChildren = () => {
    addNode(node.id);
  };

  return (
    <div className="block-with-child">
      <ArcherElement
        id={node.id}
        relations={childrens.map((childId) => ({
          targetId: childId,
          targetAnchor: "left",
          sourceAnchor: "right",
        }))}
      >
        <div>
          <Block onAdd={addChildren} label={node.label} />
        </div>
      </ArcherElement>
      <div className="grid">
        {childrens.map((childId) => (
          <TreeNodeRenderer key={childId} nodeId={childId} />
        ))}
      </div>
    </div>
  );
};
