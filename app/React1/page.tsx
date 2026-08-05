import Menu from "@/components/Menu";
import Titulo from "@/components/lista1/Titulo";
import Topo from "@/components/Topo";
import Rodape from "@/components/lista1/Rodape";
import CardAluno from "@/components/lista1/CardAluno";
import Calculadora from "@/components/lista1/Calculadora";
import Variavel from "@/components/lista1/Variavel";
import Template from "@/components/lista1/Template";
import Contador from "@/components/lista1/Contador";

export default function Home() {
  return (
    <div className="border m-4 flex min-h-screen flex-col justify-between">
      <div>
        <Menu />
        <br />
        <Titulo />
        <br />
        <CardAluno />
        <CardAluno />
        <CardAluno />
        <br />
        <Calculadora />
        <br />
        <Variavel />
      </div>
      <Template />

      <>
        <Template />
      </>
      <Contador />
      <Rodape />
    </div>
  );
}
