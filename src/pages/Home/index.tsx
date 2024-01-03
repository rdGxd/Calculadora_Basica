import { useRef, useState } from "react";
import { Button, InputValue } from "../../components/index";

export const Home = () => {
  const [valor, setValor] = useState("");
  const refButton = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValor(valor + e.currentTarget.value);
  };

  return (
    <div className="mt-52 flex content-center items-center justify-center rounded bg-white">
      <div className="grid h-full grid-cols-1 gap-2 p-2 outline outline-1">
        <InputValue value={valor} />
        <div className="mr-10 mt-5 ">
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={7}
          >
            {7}
          </button>
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={8}
          >
            {8}
          </button>
          <Button number="9" />
          <Button number="*" />
        </div>
        <div className="mr-10">
          <Button number="4" />
          <Button number="5" />
          <Button number="6" />
          <Button number="-" />
        </div>
        <div className="mr-10">
          <Button number="1" />
          <Button number="2" />
          <Button number="3" />
          <Button number="+" />
        </div>
        <div className="mb-10 mr-10">
          <Button number="/" />
          <Button number="0" />
          <Button number="." />
          <Button number="=" />
        </div>
      </div>
    </div>
  );
};
