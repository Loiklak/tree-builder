import { FC, useState } from "react";
import stylesUrl from "@/styles/index.css";
import { LinksFunction } from "@remix-run/node";
import { TreeNodeRenderer } from "@/components/shared/Node";
import { ArcherContainer, ArcherElement } from "react-archer";

interface Props {}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export type TreeNode = {
  children: TreeNode[];
  label: string;
  id: string;
};

const treeStructureDefault: TreeNode = {
  id: "totottoo",
  label: "root",
  children: [],
};

const Index: FC<Props> = () => {
  const [treeStructure, setTreeStructure] = useState(treeStructureDefault);
  return (
    <ArcherContainer strokeColor="black">
      <TreeNodeRenderer node={treeStructure} />
    </ArcherContainer>
  );
};

export default Index;
