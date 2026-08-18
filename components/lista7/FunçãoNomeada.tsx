const alunos: string[] = ["João", "Maria", "José", "Ana"];
function mostrarNome(alunos: string[]) {
  console.log(alunos);
}

export default function FuncaoNomeada() {
  alunos.forEach(mostrarNome);
  console.log("________________");
  alunos.forEach((turma) => console.log(alunos));
  console.log("________________");
  const nomes = alunos.map((aluno) => alunos);
  console.log(nomes);
  console.log("________________");

  return <div className="flex flex-col border m-2"> abra o console </div>;
}
