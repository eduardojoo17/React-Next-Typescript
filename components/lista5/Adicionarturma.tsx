"use client"

import { useState } from "react"

export default function AdicionarTurma() {
    const [form, setForm] = useState<{ nome: string }>({ nome: "" })
    const [turma, setTurma] = useState<string[]>([])

    function enviar(e: React.FormEvent) {
        e.preventDefault()
        setTurma([...turma, form.nome])
        setForm({ nome: "" })
    }

    return(
<form onSubmit={enviar} className=" flex flex-col gap-2 border w-fit bg-yellow-300 m-2 p-2 ">
            <input className="border m-2" value={form.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ nome: e.target.value })} />
            <button className="border p-2">+</button>
            <ul>{turma.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </form>
    )}