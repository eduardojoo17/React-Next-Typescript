"use client";

import { useState } from "react";

export default function Endereco() {
  const [form, setForm] = useState({
    cep: "",
    rua: "",
    bairro: "",
    uf: "",
  });

  function enviaCep (e) {
    const cep = e.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json)
        
  }

  return (
    <form className="border bg-cyan-100 p-4 m-10">
      <p className="text-center">Api Cep</p>
      <label htmlFor="cep">Cep:</label>
      <br />
      <input
        className="border placeholder-gray-300 "
        placeholder="00000000"
        type="text"
        id="cep"
        name="cep"
        onBlur={(e) => enviaCep(e)}
      />
      <br />
      <label htmlFor="rua">Rua:</label>
      <br />
      <input
        className="border placeholder-gray-300"
        placeholder="digite a rua"
        type="text"
        id="rua"
        name="rua"
      />
      <br />
      <label htmlFor="rua">Bairro:</label>
      <br />
      <input
        className="border placeholder-gray-300"
        placeholder="nome do bairro"
        type="text"
        id="bairro"
        name="bairro"
      />
      <br />
      <label htmlFor="uf">Uf:</label> <br />
      <input
        className="border placeholder-gray-300"
        placeholder="sigla do estado"
        type="text"
        id="uf"
        name="uf"
      />
    </form>
  );
}
