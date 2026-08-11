"use client"

import { useState } from "react"

export default function AddLista(){
    const [add, setAdd] = useState<string[]>(["manuela","daniel"])
  
    return(
        <div>
            <div className=" border w-fit p-2">
                <button className="border" onClick={()=> setAdd([...add,"manuela"])}>+ aluno</button>
                
                <ul>{add.map((nome,i)=><li key={i}>{nome}</li>)}</ul>

            </div>
        </div>
    )
}