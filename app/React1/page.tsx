import Menu from "@/components/Menu";
import Titulo from "@/components/lista1/Titulo";
import Topo from "@/components/Topo";
import Rodape from "@/components/lista1/Rodape";
import CardAluno from "@/components/lista1/CardAluno";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
     
        <Menu />
        <Titulo />
        <CardAluno />
        <CardAluno />
        <CardAluno />
      </div>
      <Rodape />
    </div>
  );
}
