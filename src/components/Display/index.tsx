interface Display1Props {
  value: string;
  fnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  refInput: React.RefObject<HTMLInputElement>;
}

export const Display1 = ({
  value,
  fnChange,
  fnKeyDown,
  refInput,
}: Display1Props) => {
  return (
    <input
      className="INPUT text-bold border bg-white p-4"
      value={value}
      type="text"
      onChange={fnChange}
      onKeyDown={fnKeyDown}
      ref={refInput}
    />
  );
};
