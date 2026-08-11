"use client"

import { useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number }

export default function MatriculaCompleta() {
    const [form, setForm] = useState<{ nome: string; curso: string; nota: number }>({ nome: "", curso: "Front-end", nota: 0 })
    const [turma, setTurma] = useState<Aluno[]>([])

    function enviar(e: React.FormEvent) {
        e.preventDefault()
        if (form.nome === "") return
        setTurma([...turma, { id: Date.now(), ...form }])
        setForm({ nome: "", curso: "Front-end", nota: 0 })
    }

    return (
        <form onSubmit={enviar} className=" flex flex-col gap-2 border w-fit bg-yellow-300 m-2 p-2 "> matrícula completa
            <input className="border m-2" placeholder="nome" value={form.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, nome: e.target.value })} />
            <select className="border m-2" value={form.curso} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm({ ...form, curso: e.target.value })}>
                <option>Front-end</option>
                <option>Back-end</option>
                <option>Design</option>
                <option>Mobile</option>
                <option>Dados</option>
            </select>
            <input type="number" className="border m-2" placeholder="nota" value={form.nota} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, nota: Number(e.target.value) })} />
            <button className="border p-2">matricular</button>
            <ul>{turma.map((a) => <li key={a.id}>{a.nome} — {a.curso} · {a.nota}</li>)}</ul>
        </form>
    )
}
