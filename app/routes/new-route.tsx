import { Outlet } from "@remix-run/react";
import { FC } from "react";

interface Props {}

const NewRoute: FC<Props> = () => {
  return (
    <div>
      Je suis le container principal de la nouvelle route
      <Outlet />
    </div>
  );
};

export default NewRoute;
