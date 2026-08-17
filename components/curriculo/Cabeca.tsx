"use client";
type cabecaProps = {
  selecionar: (nome: string) => void;
};

export default function Cabeca({ selecionar }: cabecaProps) {
  const menuTopo: string[] = ["inicio", "sobre"];

  return (
    <main className="flex flex-row text-center gap-2 p-2 bg-stone-900 justify-end font-serif:gergia">
      {menuTopo.map((n, i) => (
        <button
          className="border shadow hover:shadow p-2 rounded-2xl transform hover:-translate-y-0.5 "
          key={i}
          onClick={() => selecionar(n)}
        >
          {n}
        </button>
      ))}
    </main>
  );
}
