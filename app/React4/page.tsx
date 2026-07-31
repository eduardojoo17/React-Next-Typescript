import Alert from "@/components/Alert";
import Contar from "@/components/Contar";
import Header from "@/components/Header";
import MostrarEsconder from "@/components/MostrarEsconder";
import TrocarCor from "@/components/TrocarCor";

import Receba from "@/components/Receba";
import Receba2 from "@/components/Receba2";

export default function page() {
  return (
    <div className="flex flex-col">
      <Header />
      <Alert />
      <Contar />
      <MostrarEsconder />
      <TrocarCor />
      <Receba />
      <Receba2 />
    </div>
  );
}
