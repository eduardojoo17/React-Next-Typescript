import ArrayTipado from "@/components/lista3/ArrayTipado";
import CardNomeType from "@/components/lista3/CardNomeType";
import FilhoTipado from "@/components/lista3/FilhoTipado";
import Inline from "@/components/lista3/Inline";
import ObjetoTipado from "@/components/lista3/ObjetoTipado";
import Menu from "@/components/Menu";

const nomes: string[]=["joão","Larissa","Marcio"]


export default function Page() {
  return (
    <div>
      <Menu />
      <CardNomeType nome="João Eduardo" nota={10} presente bolsista />
      <Inline nome="joão <- typado inline" />
      <FilhoTipado>{nomes}</FilhoTipado>
      <ObjetoTipado/>
      <ArrayTipado/>
    </div>
  );
}
