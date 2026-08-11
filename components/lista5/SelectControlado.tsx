"use client"
import { useState } from "react"

export default function SelectControlado(){
    const [curso, setCurso] = useState<string>("Front-end")
return(
<div className="border m-4">
<select className="border" value={curso} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setCurso(e.target.value)}>
<option>Front-end</option>
<option>Back-end</option>
<option>Desing</option>
<option>Mobile</option>
<option>Dados</option>
</select>
<p > curso: {curso}</p>

</div>
)
}