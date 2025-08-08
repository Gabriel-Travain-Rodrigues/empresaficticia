import React from "react";

import { useState } from "react";
import Formu from "../componentes/form/index.js";
import Butaun from "../componentes/botao/index.js";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function aoSalvar() {
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    alert(
      `Dados enviados com sucesso!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    );
    setNome("");
    setEmail("");
    setMensagem("");
  }
  return (
    <main className="p-6">
      <h2>Formulário de Contato</h2>
      <Formu
        label="Nome"
        value={nome}
        tipo="text"
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <Formu
        label="Email"
        value={email}
        tipo="email"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Formu
        value={mensagem}
        label="Mensagem"
        tipo="textarea"
        desa={false}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <Butaun botao="Enviar" onClick={aoSalvar} />
    </main>
  );
}
console.log(Contato);
export default Contato;
