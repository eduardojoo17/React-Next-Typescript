"use client"

import { useEffect, useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number; presente: boolean }

export default function BuscarAluno() {
    const [aluno, setAluno] = useState<Aluno | null>(null)

    useEffect(() => {
        async function carregar() {
            const res = await fetch("https://prof.giango.com.br/api/turma/1")
            setAluno(await res.json())
        }
        carregar()
    }, [])

    if (!aluno) return <p className="border w-fit m-2 p-2">carregando…</p>
    return <p className="border w-fit m-2 p-2">{aluno.nome} · {aluno.curso} · nota {aluno.nota}</p>
}
