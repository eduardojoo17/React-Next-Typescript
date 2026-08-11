import AddLista from "@/components/lista4/AddLista";
import ClickAlet from "@/components/lista4/ClickAlert";
import ContadorNumber from "@/components/lista4/ContadorNumber";
import InputControlado from "@/components/lista4/InputControlado";
import Likes from "@/components/lista4/Likes";
import MarcarPresenca from "@/components/lista4/MarcarPresenca";
import MostrarEsconder from "@/components/lista4/MostrarEsconder";
import TrocaCor from "@/components/lista4/TrocaCor";
import Menu from "@/components/Menu";

export default function Page() {
  return (
    <div>
      <Menu />
      <ClickAlet />
      <ContadorNumber />
      <MostrarEsconder />
      <TrocaCor/>
      <InputControlado  />
      <MarcarPresenca/>
      <Likes/>
      <AddLista/>
      
    </div>
  );
}
