import Caixa from "@/components/Caixa";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Idade from "@/components/Idade";
import Perfil from "@/components/Perfil";
import Saudacao from "@/components/Saudacao";
import Status from "@/components/Status";



export default function Page(){
return(
        <div>
            <Header/>
            <Saudacao nome="João"/>
            <Perfil cargo="programador"/>
            <Card nome="Larissa"/>
            <Card cargo ="professora"/>
            <Idade anos={20}/>
            <Status status/>
            <Caixa>embrulho</Caixa>
            
        </div>
    );
}