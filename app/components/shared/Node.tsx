import { TreeNode } from "@/routes/_index";
import { FC, useState } from "react";
import { Block } from "./Block";

interface Props {
  node: TreeNode;
}

export const TreeNodeRenderer: FC<Props> = ({ node }) => {
  const [childrens, setChildrens] = useState<TreeNode[]>(node.children);
  const addChildren = () => {
    setChildrens((childrens) => [
      ...childrens,
      { label: "new child", children: [] },
    ]);
    console.log("childrens", childrens);
  };
  return (
    <div className="block-with-child">
      <Block onAdd={addChildren}>{node.label}</Block>
      <div className="grid">
        {childrens.map((node) => (
          <TreeNodeRenderer node={node} />
        ))}
      </div>
    </div>
  );
};
