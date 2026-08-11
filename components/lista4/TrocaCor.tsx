"use client"

import { useState } from "react"

export default function TrocaCor(){
const [cor,setCor] = useState<string>("#55C8E6")

    return(
        <div className="flex flex-col  gap-2">
<div className="  border w-30 h-30" style={{backgroundColor:cor}}></div>
<button className="border" onClick={()=> setCor("#5ae655")}>mudar</button>
<button className="border" onClick={()=> setCor("#55C8E6")}>voltar</button>
        </div>
        
    )
}