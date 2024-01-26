import { useState, useEffect } from "react";
const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log("mudou");

    return () => {
      console.log("Desmontou");
    };
  }, [nome]);

  const renderResult = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 6) {
      return <p>{nome} Aprovado!</p>;
    } else {
      return <p>{nome} Reprovado!</p>;
    }
  };

  const alteraNome = (evento) => {
    setNome((estadoAnterior) => {
      return evento.target.value;
    });
  };

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        name=""
        id=""
        placeholder="Seu nome"
        onChange={alteraNome}
      />
      <input
        onChange={({ target }) => setMateriaA(parseInt(target.value))}
        type="number"
        name=""
        id=""
        placeholder="Nota matéria A"
      />
      <input
        onChange={({ target }) => setMateriaB(parseInt(target.value))}
        type="number"
        name=""
        id=""
        placeholder="Nota matéria B"
      />
      <input
        onChange={({ target }) => setMateriaC(parseInt(target.value))}
        type="number"
        name=""
        id=""
        placeholder="Nota matéria C"
      />
      {renderResult()}
    </form>
  );
};

export default Formulario;
