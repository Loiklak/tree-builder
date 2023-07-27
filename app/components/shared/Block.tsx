import { FC, PropsWithChildren, useState } from "react";

interface Props {
  onAdd: () => void;
  label: string;
}

export const Block: FC<Props> = ({ onAdd, label }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="block"
      onClick={() => setIsEditing(true)}
      onBlur={() => setIsEditing(false)}
    >
      {isEditing ? (
        <form onSubmit={() => setIsEditing(false)}>
          <input
            type="text"
            value={label}
            onChange={(e) => (label = e.target.value)}
            autoFocus
          />
        </form>
      ) : (
        <button className="reset-button" onFocus={() => setIsEditing(true)}>
          {label}
        </button>
      )}
      <button onClick={onAdd} type="button">
        +
      </button>
    </div>
  );
};
