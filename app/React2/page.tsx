import CardAluno2 from "@/components/lista2/CardAluno2";
import Curso from "@/components/lista2/Curso";
import Menu from "@/components/Menu";
import Topo from "@/components/Topo";

export default function Turma() {
  return (
    <div>
      <Menu />
      <CardAluno2 nome="Eduardo" curso="programador" nota={10} presente />
      <Curso curso="Programação" />
    </div>
  );
}
