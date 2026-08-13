"use client"
import { useState } from "react"

export default function Calculadora2() {
    const botoes: string[] = ["7", "8", '9', '/', "4", "5", '6', 'x', "1", "2", '3', '-', "C", "0", '=', '+']

   
    const [visor, setVisor] = useState("");
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState("");
    const [operador, setOperador] = useState("");

    function ehNumero (num : string) {
        for(let i=0; i<=9 ; i++){
            if (num === i.toString()) {
                return true
            }
        }
    }

    function limpaTela() {
        setVisor("")
    }

    

    function addValor(num : string){
        //Se num for um numero 
        //Senao

        if(ehNumero(num)) {
            setVisor(visor + num)
        } else {
            //
            
            switch(num) {
                case "/" : setNum1(visor); setOperador("/"); setNum2(visor)
                break;
                case "x" : setNum1(visor); setOperador("x"); 
                break;
                case "-" : setNum1(visor); setOperador("-"); 
                break;
                case "+" : setNum1(visor); setOperador(""); 
                break;
                case "=" : setNum1(visor); setOperador("/"); 
                break;
                case "C" : limpaTela(); setNum1(""); setNum2("");
                break;
                default :
                break; 
            }
        }
    }

    return (
        <div className=" flex flex-col border bg-blue-400 w-80 h-110">
            <div className="border flex flex-2 text-center justify-end">{visor}</div>
            <div className="flex-2 grid grid-cols-4 gap-2">
                {botoes.map((n, i) => 
                    <button 
                    onClick={() => addValor(n)}
                    key={i} 
                    className="
                        flex items-center justify-center rounded-lg bg-gray-600 font-bold
                    ">{n}</button>
                )}
            </div>
        </div>
    )
}