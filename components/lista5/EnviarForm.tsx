"use client"

import { useState } from "react"

export default function EnviarForm() {
    const [form, setForm] = useState<{ nome: string }>({ nome: "" })

    function envio(e: React.FormEvent) {
        e.preventDefault()
        alert("enviado: " + form.nome)
    }
    return (
        <form onSubmit={envio}>
            <input className="border" value={form.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ nome: e.target.value })} />
            <button type="submit" className="border">enviar</button>
        </form>
    )
}