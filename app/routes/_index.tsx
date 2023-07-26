import { FC } from "react";
import stylesUrl from "@/styles/index.css";
import { LinksFunction } from "@remix-run/node";

interface Props {}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

const Index: FC<Props> = () => {
  return (
    <div>
      Coucou à tous je suis la première page
      <span>hola a todos</span>
    </div>
  );
};

export default Index;
