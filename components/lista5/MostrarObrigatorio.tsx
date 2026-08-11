"use client"
import { useState } from "react"

export default function MostrarObrigatorio() {
    const [form, setForm] = useState<{ nome: string }>({ nome: "" })
    const [enviado, setEnviado] = useState<string>("")

    function enviar(e: React.FormEvent) {
        e.preventDefault()
        if (form.nome === "") {
            alert("preencha o nome")
            return
        }
        alert("matriculado " + form.nome)
        setEnviado(form.nome)
    }
    return (
        <form onSubmit={enviar}>
            <input className="border" value={form.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ nome: e.target.value })} />
            <button className="border">enviar</button>
            {enviado && <p>matriculado: {enviado}</p>}</form>
    )
}