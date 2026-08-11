import DoisInputs from "@/components/lista5/DoisInputs";
import InputControlad2 from "@/components/lista5/InputControlado2";
import ObjetoEstado from "@/components/lista5/ObjetoEstado";
import Menu from "@/components/Menu";

export default function Page() {
    return (
        <div>
            <Menu />
            <InputControlad2 />
            <DoisInputs/>
            <ObjetoEstado/>
        </div>
    );
}