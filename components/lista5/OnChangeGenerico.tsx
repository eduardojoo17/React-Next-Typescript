"use client"
import { useState } from "react"

export default function OnChangeGenerico(){
    const [form, setForm] = useState<{nome:string; curso:string}>({nome:"",curso:""})

    function mudar(e:React.ChangeEvent<HTMLInputElement>){
        setForm({...form,[e.target.name]: e.target.value})
    }
return(
        <div className=" flex flex-col text-center gap-2 border w-fit bg-yellow-300 m-2 "> onChange generico
<input className="border m-2" name="nome" placeholder="digite nome aqui:" value={form.nome} onChange={mudar}/>
<input className="border m-2" name="curso" placeholder="digite curso aqui:" value={form.curso} onChange={mudar}/>
<p className="text-2x1">{form.nome}</p>
<p className="text-2x1">{form.curso}</p>

</div>
)
}