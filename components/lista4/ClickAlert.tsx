"use client";
export default function ClickAlet() {
  return (
    <button
      className="bg-green-700 border-2 p-2"
      onClick={() => alert("Olá, turma")}
    >
      Clique aqui
    </button>
  );
}
