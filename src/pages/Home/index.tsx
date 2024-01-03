import { useEffect, useRef, useState } from "react";

export const Home = () => {
  const [valor, setValor] = useState("");
  const refButton = useRef<HTMLButtonElement>(null);
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    refInput.current?.focus();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValor(valor + e.currentTarget.value);
  };

  const handleClickInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCalculator();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValor(e.currentTarget.value);
  };

  const handleCalculator = () => {
    const resultado = eval(valor);
    setValor(resultado);
  };

  const handleDelete = () => {
    const valorAtual = valor.toString();
    const novoValor = valorAtual.substring(0, valorAtual.length - 1);
    setValor(novoValor);
  };

  return (
    <div className="mt-20 flex content-center items-center justify-center rounded bg-gray-500">
      <div className="grid h-full grid-cols-1 gap-2 p-2 outline outline-1">
        <input
          className="INPUT border bg-white p-4 text-bold"
          value={valor}
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleClickInput}
          ref={refInput}
        />
        <div className="mr-10 mt-5 ">
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={7}
          >
            {7}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={8}
          >
            {8}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={9}
          >
            {9}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={"*"}
          >
            {"*"}
          </button>
        </div>
        <div className="mr-10">
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={4}
          >
            {4}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={5}
          >
            {5}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={6}
          >
            {6}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={"-"}
          >
            {"-"}
          </button>
        </div>
        <div className="mr-10">
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={1}
          >
            {1}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={2}
          >
            {2}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={3}
          >
            {3}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={"+"}
          >
            {"+"}
          </button>
        </div>
        <div className="mr-10">
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={"/"}
          >
            {"/"}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={0}
          >
            {0}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleClick}
            ref={refButton}
            value={"."}
          >
            {"."}
          </button>
          <button
            className="ml-5 w-1/6 rounded border bg-black p-4 text-white"
            onClick={handleCalculator}
            ref={refButton}
            value={"="}
          >
            {"="}
          </button>
        </div>
        <div className="mb-10 mr-10">
          <button
            className="ml-5 rounded border bg-black p-4 text-white"
            onClick={() => setValor("")}
            ref={refButton}
            value={"Limpar"}
          >
            {"Limpar"}
          </button>
          <button
            className="ml-5  rounded border bg-black p-4 text-white"
            onClick={handleDelete}
            ref={refButton}
            value={""}
          >
            {"Apagar"}
          </button>
        </div>
      </div>
    </div>
  );
};
