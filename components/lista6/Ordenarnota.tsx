"use client"

import { useEffect, useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number; presente: boolean }

export default function OrdenarNota() {
    const [turma, setTurma] = useState<Aluno[]>([])

    useEffect(() => {
        async function carregar() {
            const res = await fetch("https://prof.giango.com.br/api/turma")
            setTurma(await res.json())
        }
        carregar()
    }, [])
    const media = turma.length
        ? turma.reduce((s, a) => s + a.nota, 0) / turma.length
        : 0

    const ranking = [...turma].sort((a, b) => b.nota - a.nota)
    return( <div>
        <ol className="border w-fit bg-sky-200 m-2 p-2">{ranking.map((a) => <li key={a.id}>{a.nome} — {a.nota}</li>)}</ol>
        <p className="border w-fit bg-sky-200 m-2 p-2">média: {media.toFixed(1)}</p>
        </div>
)}
