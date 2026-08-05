import Endereco from "@/components/Formulario/Endereco";
import Menu from "@/components/Menu";

export default function form(){
    return(
        <div >
            <Menu/>
            <div className="flex flex-col justify-center items-center gap-2">
               <Endereco/>
            <img className="w-100 h-50 border-2" src="sedex.jpeg" alt="" /> 
            </div>
            
        </div>
    )
}