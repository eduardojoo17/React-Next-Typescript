import Curso from "@/components/lista2/Curso";
type card = {
  nome: string;
  curso: string;
  nota: number;
  presente: boolean;
  
};

export default function CardAluno2({ nome, curso, nota, presente }: card) {
  return (
    <div className="flex flex-col border p-2 ">
      <h1>{nome}</h1>
      <h2>
        <Curso curso={curso} />
        <p>{nota}</p>
        <span>{presente ? "🟢 presente" : "⚪ ausente"}</span>
        
      </h2>
    </div>
  );
}
