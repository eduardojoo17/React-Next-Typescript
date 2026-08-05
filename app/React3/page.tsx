import CardNomeType from "@/components/lista3/CardNomeType";
import Menu from "@/components/Menu";

export default function Page() {
  return <div>
    <Menu/>
    <CardNomeType nome="João Eduardo" curso="-programação-🤖" nota={10}/>
  </div>;
}
