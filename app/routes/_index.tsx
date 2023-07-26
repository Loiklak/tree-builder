import { FC, useState } from "react";
import stylesUrl from "@/styles/index.css";
import { LinksFunction } from "@remix-run/node";
import { TreeNodeRenderer } from "@/components/shared/Node";
import { ArcherContainer, ArcherElement } from "react-archer";
import TreeContextProvider from "@/components/shared/TreeContext";

interface Props {}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export type TreeNode = {
  children: TreeNode[];
  label: string;
  id: string;
};

const Index: FC<Props> = () => {
  return (
    <TreeContextProvider>
      <ArcherContainer strokeColor="black">
        <TreeNodeRenderer nodeId={"root"} />
      </ArcherContainer>
    </TreeContextProvider>
  );
};

export default Index;
