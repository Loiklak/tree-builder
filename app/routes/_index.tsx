import { FC, useState } from "react";
import stylesUrl from "@/styles/index.css";
import { LinksFunction } from "@remix-run/node";
import { TreeNodeRenderer } from "@/components/shared/Node";

interface Props {}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export type TreeNode = {
  children: TreeNode[];
  label: string;
};

const treeStructureDefault: TreeNode = {
  label: "root",
  children: [
    {
      label: "child 1",
      children: [
        {
          label: "child 1.1",
          children: [
            {
              label: "child 1.1.1",
              children: [],
            },
            {
              label: "child 1.1.2",
              children: [],
            },
            {
              label: "child 1.1.3",
              children: [],
            },
            {
              label: "child 1.1.4",
              children: [],
            },
          ],
        },
        {
          label: "child 1.2",
          children: [],
        },
      ],
    },
  ],
};

const Index: FC<Props> = () => {
  const [treeStructure, setTreeStructure] = useState(treeStructureDefault);
  return <TreeNodeRenderer node={treeStructure} />;
};

export default Index;
