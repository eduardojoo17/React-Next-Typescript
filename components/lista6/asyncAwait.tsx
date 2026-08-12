"use client"

import { useEffect, useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number; presente: boolean }

export default function AsyncAwait() {
    const [turma, setTurma] = useState<Aluno[]>([])

    useEffect(() => {
        async function carregar() {
            const res = await fetch("https://prof.giango.com.br/api/turma")
            const turma = await res.json()
            setTurma(turma)
        }
        carregar()
    }, [])

    return (
        <div className=" border w-fit bg-sky-200 m-2 p-2 "> async / await
            <ul>{turma.map((a) => <li key={a.id}>👤 {a.nome}</li>)}</ul>
        </div>
    )
}
