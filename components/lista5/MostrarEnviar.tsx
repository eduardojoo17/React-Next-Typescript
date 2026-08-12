"use client"
import { useState } from "react"

export default function MostrarEnviar() {
    const [form, setForm] = useState<{ nome: string }>({ nome: "" })
    const [enviado, setEnviado] = useState<string>("")

    function enviar(e: React.FormEvent) {
        e.preventDefault()
        setEnviado(form.nome)
    }
    return (
        <form onSubmit={enviar} className="flex flex-col border m-2 w-fit">
            <input className="border" value={form.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ nome: e.target.value })} />
            <button className="border">enviar</button>
            {enviado && <p>matriculado: {enviado}</p>}
        </form>
    )
}