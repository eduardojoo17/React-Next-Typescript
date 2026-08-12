"use client"

import { useEffect, useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number; presente: boolean }

export default function SoPresentes() {
    const [turma, setTurma] = useState<Aluno[]>([])

    useEffect(() => {
        async function carregar() {
            const res = await fetch("https://prof.giango.com.br/api/turma")
            setTurma(await res.json())
        }
        carregar()
    }, [])

    const presentes = turma.filter((a) => a.presente)

    return( <div className="border w-fit">
        <p>{presentes.length} pessoas</p>
        <ul className="border w-fit bg-sky-200 m-2 p-2">{presentes.map((a) => <li key={a.id}>✅ {a.nome}</li>)}</ul>
        </div>
)}
