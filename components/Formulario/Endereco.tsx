"use client";

import { useState } from "react";

export default function Endereco() {
  const [form, setForm] = useState({
    cep: "",
    rua: "",
    bairro: "",
    uf: "",
  });

  const [erro, setErro] = useState("");

  function enviaCep(e: React.FocusEvent<HTMLInputElement>) {
    const cep = e.target.value;
    if (cep.length !== 8) {
      return (setErro("precisa ter 8 números") );
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((dados) => {
        if (dados.erro) {
          return (setErro("cep não encontrado"));
        }
        setForm({
          ...form,
          rua: dados.logradouro,
          bairro: dados.bairro,
          uf: dados.uf,
        });
      });
  }

  return (
    <form className="border rounded-3xl text-black bg-linear-to-r/increasing from-cyan-500 to-blue-600 m-10 p-3.5 ">
      <p className="text-center font-bold text-3xl font-serif">Api Cep</p>
      <label htmlFor="cep">Cep:</label>
      <br />
      <input
        className="border p-1 placeholder-gray-500 rounded-2xl "
        placeholder=" 00000000"
        type="text"
        id="cep"
        name="cep"
        onBlur={(e) => enviaCep(e)}
      />
      {erro && <p>{erro}<video width="200" height="200" autoPlay><source src="cat.mp4" /></video></p>}
      <br />
      <label htmlFor="rua">Rua:</label>
      <br />
      <input
        className="border p-1 placeholder-gray-500 rounded-2xl "
        placeholder="digite a rua"
        type="text"
        id="rua"
        name="rua"
        value={form.rua}
        onChange={(e) => setForm({ ...form, rua: e.target.value })}
      />
      <br />
      <label htmlFor="rua">Bairro:</label>
      <br />
      <input
        className="border p-1 placeholder-gray-500 rounded-2xl border placeholder-gray-500"
        placeholder="nome do bairro"
        type="text"
        id="bairro"
        name="bairro"
        value={form.bairro}
        onChange={(e) => setForm({ ...form, bairro: e.target.value })}
      />
      <br />
      <label htmlFor="uf">Uf:</label> <br />
      <input
        className="border p-1 placeholder-gray-500 rounded-2xl "
        placeholder="sigla do estado"
        type="text"
        id="uf"
        name="uf"
        value={form.uf}
        onChange={(e) => setForm({ ...form, uf: e.target.value })}
      />
    </form>
  );
}
