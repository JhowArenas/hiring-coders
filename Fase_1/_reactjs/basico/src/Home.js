import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [usuario, setUsuario] = useState("");

  function handlePesquisa(user) {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
      console.log(response.data);
    });
  }

  return (
    <>
      <h1>
        {props.title} {props.user}
      </h1>
      <input
        className="usuarioInput"
        placeholder="Usuario"
        value={ usuario }
        onChange={({ target }) => setUsuario(target.value)}
      />
      <button
        onClick={() => handlePesquisa(usuario)}
      >
        Pesquisar
      </button>
      <p>{usuario}</p>
    </>
  );
}

export default App;
