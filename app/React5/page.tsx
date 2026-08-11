import AdicionarTurma from "@/components/lista5/Adicionarturma";
import BotaoDesabilitado from "@/components/lista5/BotaoDesabilitado";
import CampoNumero from "@/components/lista5/CampoNumero";
import CheckboxControlado2 from "@/components/lista5/CheckboxCont";
import ContadorCaracteres from "@/components/lista5/ContadorCara";
import DoisInputs from "@/components/lista5/DoisInputs";
import EnviarForm from "@/components/lista5/EnviarForm";
import InputControlad2 from "@/components/lista5/InputControlado2";
import LimparForm from "@/components/lista5/limparForm";
import MatriculaCompleta from "@/components/lista5/MatriculaCompleta";
import MiniCadastroTurma from "@/components/lista5/miniCadastroTurma";
import MostrarEnviar from "@/components/lista5/MostrarEnviar";
import MostrarObrigatorio from "@/components/lista5/MostrarObrigatorio";
import ObjetoEstado from "@/components/lista5/ObjetoEstado";
import OnChangeGenerico from "@/components/lista5/OnChangeGenerico";
import RadioControlado from "@/components/lista5/RadioControlado";
import SelectControlado from "@/components/lista5/SelectControlado";
import TextareaControlada from "@/components/lista5/TextAreaControlado";
import ValidacaoLista from "@/components/lista5/validaçãoLista";
import Menu from "@/components/Menu";

export default function Page() {
    return (
        <div>
            <Menu />
            <InputControlad2 />
            <DoisInputs/>
            <ObjetoEstado/>
            <OnChangeGenerico/>
            <EnviarForm/>
            <MostrarEnviar/>
            <MostrarObrigatorio/>
            <SelectControlado/>
            <CheckboxControlado2/>
            <RadioControlado/>
            <LimparForm/>
            <ContadorCaracteres/>
            <BotaoDesabilitado/>
            <AdicionarTurma/>
            <CampoNumero/>
            <TextareaControlada/>
            <MatriculaCompleta/>
            <ValidacaoLista/>
            <MiniCadastroTurma/>
        </div>
    );
}