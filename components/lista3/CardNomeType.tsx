type AlunoProps = {
  nome: string;
  curso: string;
  nota: number;
};

export default function CardNomeType({ nome, curso, nota }: AlunoProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className=" border p-4">
        {nome}
        <div>{curso}</div>
        <div> nota: {nota}</div>
      </div>
    </div>
  );
}
