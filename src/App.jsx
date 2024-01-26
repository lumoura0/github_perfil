import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formVisible, setFormVisible] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState("lumoura0");

  return (
    <>
      <input
        className="input"
        type="text"
        onChange={(e) => setNomeUsuario(e.target.value)}
        placeholder="Digite um usuário"
      />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formVisible && <Formulario />}
      <button onClick={() => setFormVisible(!formVisible)} type="button">
        Toggle form
      </button> */}
    </>
  );
}

export default App;
