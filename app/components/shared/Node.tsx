import { TreeNode } from "@/routes/_index";
import { FC, useState } from "react";
import { Block } from "./Block";
import { ArcherElement } from "react-archer";

interface Props {
  node: TreeNode;
}

export const TreeNodeRenderer: FC<Props> = ({ node }) => {
  const [childrens, setChildrens] = useState<TreeNode[]>(node.children);
  const addChildren = () => {
    setChildrens((childrens) => [
      ...childrens,
      { label: "new child", children: [], id: crypto.randomUUID() },
    ]);
  };

  return (
    <div className="block-with-child">
      <ArcherElement
        id={node.id}
        relations={childrens.map((child) => ({
          targetId: child.id,
          targetAnchor: "left",
          sourceAnchor: "right",
        }))}
      >
        <div>
          <Block onAdd={addChildren}>{node.label}</Block>
        </div>
      </ArcherElement>
      <div className="grid">
        {childrens.map((child) => (
          <TreeNodeRenderer key={child.id} node={child} />
        ))}
      </div>
    </div>
  );
};
