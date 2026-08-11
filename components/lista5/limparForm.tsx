"use client"
import { useState } from "react"

export default function LimparForm(){
    const [form,setForm] = useState<{nome: string; curso: string}>({nome:"",curso:""})
function enviar (e:React.FormEvent){
    e.preventDefault()
    alert("matriculado: "+form.nome)
    setForm({nome: "", curso:""})
}

return(
<form className="border m-4" onSubmit={enviar}>
    <input className="border" value={form.nome} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setForm({...form,nome: e.target.value})}/>
    <button className="border">enviar</button>
</form>
)
}