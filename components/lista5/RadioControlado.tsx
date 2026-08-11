"use client"
import { useState } from "react"

export default function RadioControlado (){
const [turno, setTurno] = useState<string>("manha")

return(
<div>
<label><input type="radio"checked={turno === "manha"} onChange={()=> setTurno("manha")} />manhã</label>
<label><input type="radio"checked={turno === "tarde"} onChange={()=> setTurno("tarde")} />tarde</label>
<p>turno: {turno}</p>
</div>
)
}