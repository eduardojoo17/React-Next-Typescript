import Cabeca from "@/components/curriculo/Cabeca";
import Corpo from "@/components/curriculo/Corpo";
import Inferior from "@/components/curriculo/Inferior";
import Menu from "@/components/Menu";

export default function Curriculo() {
  return (
  <div>
<Menu/>
    <div className="bg-amber-100 m-6">
      <Cabeca
        nome="João Eduardo Paiva da Costa"
        email="eduardojoo17@gmail.com"
        cidade="Petrópolis"
        celular="24-99298-0960"
      />
      
      <Corpo />
      <Inferior />
    </div>
  </div>
    
  );
}
