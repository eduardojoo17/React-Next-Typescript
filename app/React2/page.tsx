import CardAluno2 from "@/components/lista2/CardAluno2";
import Curso from "@/components/lista2/Curso";
import Menu from "@/components/Menu";
import Topo from "@/components/Topo";

export default function Turma() {
  return (
    <body className="bg-amber-700">
      <Topo />
      <Menu />
      <CardAluno2 nome="Eduardo" curso="programador" nota={9} />
      <Curso curso="Programação" />
    </body>
  );
}
