interface ButtonProps {
  value: string;
  refButton: React.RefObject<HTMLButtonElement>;
  fn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ value, refButton, fn }: ButtonProps) => {
  return (
    <button
      className="ml-5 rounded border bg-black p-4 text-white"
      onClick={fn}
      ref={refButton}
      value={value}
    >
      {value}
    </button>
  );
};
