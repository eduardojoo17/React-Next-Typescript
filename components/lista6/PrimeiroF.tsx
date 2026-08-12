"use client"

import { useEffect, useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number; presente: boolean }

export default function PrimeiroFetch() {
    const [turma, setTurma] = useState<Aluno[]>([])

    useEffect(() => {
        fetch("https://prof.giango.com.br/api/turma")
            .then((r) => r.json())
            .then((d) => setTurma(d))
    }, [])

    return (
        <div className=" border w-fit bg-sky-200 m-2 p-2 "> primeiro fetch
            <ul>{turma.map((a)=><li key={a.id}>👤{a.nome}</li>)}</ul>
        </div>
    )
}
