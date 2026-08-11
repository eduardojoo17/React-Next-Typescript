"use client"

import { useState } from "react"

export default function ObjetoEstado() {
    const [nome, setNome] = useState<{nome:string;curso:string}>({nome:"",curso:""})
    

    return (
        <div className=" flex flex-col  gap-2 border w-fit bg-yellow-700 m-2 "> objeto estado
            <input className="border m-2" placeholder="digite nome aqui:" value={nome.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome({...nome,nome: e.target.value})} />
            <input className="border m-2" placeholder="digite o curso aqui:" value={nome.curso} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome({...nome,curso: e.target.value})} />
           
           <div className="flex flex-col border">
             <p className=" m-2  p-2">{nome.nome}</p>
          
            <p className=" m-2  p-2">{nome.curso}</p>
          
        </div>
           </div>
           

    )
}