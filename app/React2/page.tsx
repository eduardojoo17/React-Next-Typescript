import Contador from "@/components/Contador";
import Header from "@/components/Header";
import Rodape from "@/components/Rodape";


export default function Turma(){
    return( <div className="bg-amber-700">
        <Header/>
        <Contador/>
        <div className="flex flex-wrap gap-3 items-center">
        <div>Ana</div>
        <div>João</div>
        <div>Pedro</div>
        <div>Daniel</div>
</div>
        <Rodape/>
    </div>

    )}