type AlunoProps = {
  nome: string;
  curso?: string;
  nota: number;
  presente?: boolean;
  bolsista?: boolean;
};

export default function CardNomeType({
  nome,
  curso = "front-end",
  nota,
  presente,
  bolsista,
}: AlunoProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className=" border p-4">
        {nome}
        <div>{curso}</div>
        {nota > 6 && <div> {nota}✅</div>}
        <div>{presente ? "🟢presente" : "⚪ausente"}</div>
        <div> {bolsista && "🎓"}</div>
      </div>
    </div>
  );
}
