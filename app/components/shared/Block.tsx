import { FC, PropsWithChildren, useState } from "react";
import { NodeInMemory, useTreeContext } from "./TreeContext";

interface Props {
  onAdd: () => void;
  node: NodeInMemory;
}

export const Block: FC<Props> = ({ onAdd, node: { label, id } }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(label);

  const { updateNodeLabel, deleteNode } = useTreeContext();

  const startEditing = () => {
    setIsEditing(true);
    setValue(label);
  };

  const stopEditingAndSave = () => {
    setIsEditing(false);
    updateNodeLabel(id, value);
  };

  return (
    <div className="block" onClick={startEditing} onBlur={stopEditingAndSave}>
      {isEditing ? (
        <form onSubmit={stopEditingAndSave}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
        </form>
      ) : (
        <button className="reset-button" onFocus={startEditing}>
          {label}
        </button>
      )}
      <div>
        <button onClick={onAdd} type="button">
          +
        </button>
        <button onClick={() => deleteNode(id)} type="button">
          🚮
        </button>
      </div>
    </div>
  );
};
