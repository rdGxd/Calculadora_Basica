import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";
import { Display1 } from "../../components/Display";

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
        <Display1
          fnChange={handleInputChange}
          fnKeyDown={handleClickInput}
          value={valor}
          refInput={refInput}
        />
        <div className="mr-10 mt-5 ">
          <Button value="9" refButton={refButton} fn={handleClick} />
          <Button value="8" refButton={refButton} fn={handleClick} />
          <Button value="7" refButton={refButton} fn={handleClick} />
          <Button value="*" refButton={refButton} fn={handleClick} />
        </div>
        <div className="mr-10">
          <Button value="4" refButton={refButton} fn={handleClick} />
          <Button value="5" refButton={refButton} fn={handleClick} />
          <Button value="6" refButton={refButton} fn={handleClick} />
          <Button value="-" refButton={refButton} fn={handleClick} />
        </div>
        <div className="mr-10">
          <Button value="3" refButton={refButton} fn={handleClick} />
          <Button value="2" refButton={refButton} fn={handleClick} />
          <Button value="1" refButton={refButton} fn={handleClick} />
          <Button value="+" refButton={refButton} fn={handleClick} />
        </div>
        <div className="mr-10">
          <Button value="/" refButton={refButton} fn={handleClick} />
          <Button value="0" refButton={refButton} fn={handleClick} />
          <Button value="." refButton={refButton} fn={handleClick} />
          <Button value="=" refButton={refButton} fn={handleCalculator} />
        </div>
        <div className="mb-10 mr-10">
          <Button
            value="Limpar"
            refButton={refButton}
            fn={() => setValor("")}
          />
          <Button value="Apagar" refButton={refButton} fn={handleDelete} />
        </div>
      </div>
    </div>
  );
};
