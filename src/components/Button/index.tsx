import { useRef, useState } from "react";
import { InputValue } from "..";

interface IButton {
  number: string;
}

export const Button = ({ number }: IButton) => {
  const [valor, setValor] = useState("");
  const refButton = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValor(e.currentTarget.value);
    <InputValue value={valor} />;
  };

  return (
    <button
      className="ml-5 w-1/6 rounded border border-black p-4"
      onClick={handleClick}
      ref={refButton}
      value={number}
    >
      {number}
    </button>
  );
};
