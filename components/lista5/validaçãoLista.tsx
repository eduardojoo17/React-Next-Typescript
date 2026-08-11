"use client"

import { useState } from "react"

export default function ValidacaoLista() {
    const [form, setForm] = useState<{ nome: string }>({ nome: "" })
    const [turma, setTurma] = useState<string[]>([])
    const [erro, setErro] = useState<string>("")

    function enviar(e: React.FormEvent) {
        e.preventDefault()
        if (form.nome === "") {
            setErro("nome obrigatório")
            return
        }
        setErro("")
        setTurma([...turma, form.nome])
        setForm({ nome: "" })
    }

    return (
        <form onSubmit={enviar} className=" flex flex-col gap-2 border w-fit bg-yellow-300 m-2 p-2 ">
            <input className="border m-2" value={form.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ nome: e.target.value })} />
            {erro && <p className="text-red-600 font-bold">{erro}</p>}
            <button className="border p-2">+</button>
            <p className="font-bold">total: {turma.length}</p>
            <ul>{turma.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </form>
    )
}
