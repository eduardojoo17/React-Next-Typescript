import Calculadora from "@/components/calculadora/Calculadora";
import Calculadora2 from "@/components/calculadora/Calculadora2";

export default function Page(){
    return(
        <div className="flex flex-col items-center justify-center bg-gray-400 w-screen h-screen">
            {/* <Calculadora/> */}
            <Calculadora2/>
        </div>
    )
}