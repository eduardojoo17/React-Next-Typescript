"use client";

type corpoProps = {
  mostrar: boolean;
};

export default function Corpo({ mostrar }: corpoProps) {
  const cards = [
    { titulo: "João Eduardo Paiva da Costa" },
    { titulo: "Formação", texto: "SENAI - Full Stack + Cybersecurity" },
    {
      titulo: "Stack",
      texto: "TypeScript, Express, TypeORM, PostgreSQL, React-Next.js",
    },
  ];

  return (
    <div className="bg-white w-screen shadow-stone-700 flex items-center justify-center">
      <div className="flex items-center justify-center">
        <img className="w-100 rounded-b-full" src="me.png" alt="img" />
        <div className="text-black "></div>
      </div>

      <div
        className={`flex gap-4 transition-all duration-[1800ms] ease-in-out overflow-hidden ${
          mostrar
            ? "max-w-[1000px] opacity-100 translate-x-0 ml-4"
            : "max-w-0 opacity-0 -translate-x-10 ml-0"
        }`}
      >
        {cards.map((n, i) => (
          <div key={i} className="shrink-0">
            <h3 className="text-black font-bold text-lg">{n.titulo}</h3>
            <p className="text-sm text-stone-700">{n.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
