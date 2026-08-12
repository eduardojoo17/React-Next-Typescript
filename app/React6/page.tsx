import TresEstados from "@/components/lista6/3estados";
import AsyncAwait from "@/components/lista6/asyncAwait";
import BotaoRecarregar from "@/components/lista6/BotaoRecareegar";
import BuscarAluno from "@/components/lista6/BuscarAluno";
import CardTurma from "@/components/lista6/CardTurma";
import EstadoLoading from "@/components/lista6/estadoLoadiging";
import FiltrarCurso from "@/components/lista6/FiltrarCurso";
import OrdenarNota from "@/components/lista6/Ordenarnota";
import PrimeiroFetch from "@/components/lista6/PrimeiroF";
import SoPresentes from "@/components/lista6/SoPresentes";
import TratarErro from "@/components/lista6/TratarErro";
import Menu from "@/components/Menu";

export default function Page(){
    return(
        <div>
         <Menu/>
         <PrimeiroFetch/>
         <AsyncAwait/>
         <EstadoLoading/>
         <CardTurma/>
         <TratarErro/>
         <FiltrarCurso/>
         <SoPresentes/>
         <BuscarAluno/>
         <BotaoRecarregar/>
         <TresEstados/>
         <OrdenarNota/>
        </div>
    )
}