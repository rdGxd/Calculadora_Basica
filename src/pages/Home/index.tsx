import { useRef, useState } from "react";

export const Home = () => {
  const [valor, setValor] = useState("");
  const refButton = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValor(valor + e.currentTarget.value);
  };

  const handleCalculator = () => {
    const resultado = eval(valor);
    setValor(resultado);
  };

  const handleDelete = () => {
    const valorAtual = valor;
    const novoValor = valorAtual.substring(0, valorAtual.length - 1);
    setValor(novoValor);
  };

  return (
    <div className="mt-52 flex content-center items-center justify-center rounded bg-white">
      <div className="grid h-full grid-cols-1 gap-2 p-2 outline outline-1">
        <input value={valor} className="border  border-black bg-white p-4 " />
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
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={9}
          >
            {9}
          </button>
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={"*"}
          >
            {"*"}
          </button>
        </div>
        <div className="mr-10">
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={4}
          >
            {4}
          </button>
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={5}
          >
            {5}
          </button>
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={6}
          >
            {6}
          </button>
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={"-"}
          >
            {"-"}
          </button>
        </div>
        <div className="mr-10">
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={1}
          >
            {1}
          </button>
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={2}
          >
            {2}
          </button>
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={3}
          >
            {3}
          </button>
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={"+"}
          >
            {"+"}
          </button>
        </div>
        <div className="mr-10">
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={"/"}
          >
            {"/"}
          </button>
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={0}
          >
            {0}
          </button>
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleClick}
            ref={refButton}
            value={"."}
          >
            {"."}
          </button>
          <button
            className="ml-5 w-1/6 rounded border border-black p-4"
            onClick={handleCalculator}
            ref={refButton}
            value={"="}
          >
            {"="}
          </button>
        </div>
        <div className="mb-10 mr-10">
          <button
            className="ml-5 rounded border border-black p-4"
            onClick={() => setValor("")}
            ref={refButton}
            value={"Limpar"}
          >
            {"Limpar"}
          </button>
          <button
            className="ml-5  rounded border border-black p-4"
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
