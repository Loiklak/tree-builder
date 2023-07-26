import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onAdd: () => void;
}

export const Block: FC<Props> = ({ children, onAdd }) => {
  return (
    <div className="block">
      {children}
      <button onClick={onAdd} type="button">
        +
      </button>
    </div>
  );
};
