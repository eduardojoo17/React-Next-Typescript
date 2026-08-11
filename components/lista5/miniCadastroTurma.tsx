"use client"

import { useState } from "react"

type Aluno = { id: number; nome: string; curso: string; bolsista: boolean }

export default function MiniCadastroTurma() {
    const [form, setForm] = useState<{ nome: string; curso: string; bolsista: boolean }>({ nome: "", curso: "Front-end", bolsista: false })
    const [turma, setTurma] = useState<Aluno[]>([])

    function enviar(e: React.FormEvent) {
        e.preventDefault()
        if (form.nome === "") return
        setTurma([...turma, { id: Date.now(), ...form }])
        setForm({ nome: "", curso: "Front-end", bolsista: false })
    }

    return (
        <form onSubmit={enviar} className=" flex flex-col gap-2 border w-fit bg-yellow-300 m-2 p-2 "> mini cadastro da turma
            <input className="border m-2" placeholder="nome" value={form.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, nome: e.target.value })} />
            <select className="border m-2" value={form.curso} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm({ ...form, curso: e.target.value })}>
                <option>Front-end</option>
                <option>Back-end</option>
                <option>Design</option>
                <option>Mobile</option>
                <option>Dados</option>
            </select>
            <label className="flex items-center gap-2">
                <input type="checkbox" checked={form.bolsista} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, bolsista: e.target.checked })} />
                bolsista
            </label>
            <button disabled={form.nome === ""} className="border p-2 disabled:opacity-40">matricular</button>
            <p className="font-bold">matriculados: {turma.length}</p>
            <ul>{turma.map((a) => <li key={a.id}>{a.nome} — {a.curso} {a.bolsista && "🎓"}</li>)}</ul>
        </form>
    )
}
