import { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet, Scripts } from "@remix-run/react";
import globalStylesUrl from "@/styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>My dang good tree builder</title>
        <Links />
      </head>
      <body>
        <LiveReload />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
