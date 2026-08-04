import Curso from "@/components/lista2/Curso";
type card = {
  nome: string;
  curso: string;
  nota: number;
};

export default function CardAluno2({ nome, curso, nota }: card) {
  return (
    <div className="flex flex-col border p-2 w-auto h-auto">
      <h1>{nome}</h1>
      <h2>
        <Curso curso={curso} />
        <p>{nota}</p>
      </h2>
    </div>
  );
}
