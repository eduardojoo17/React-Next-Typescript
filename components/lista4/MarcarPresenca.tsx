"use client"

import { useState } from "react"

export default function MarcarPresenca(){
    const [marcar,setMarcar] = useState<boolean>(false)
    return(
<div className="border">
    <h1 className="border">Ana Carolina</h1>
        <button onClick={()=> setMarcar(true)}> {marcar==true ? "presente":"ausente"}</button>
</div>
    )
}