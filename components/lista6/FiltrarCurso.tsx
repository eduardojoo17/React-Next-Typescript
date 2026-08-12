"use client"

import { useEffect, useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number; presente: boolean }

export default function FiltrarCurso() {
    const [turma, setTurma] = useState<Aluno[]>([])

    useEffect(() => {
        async function carregar() {
            const res = await fetch("https://prof.giango.com.br/api/turma")
            setTurma(await res.json())
        }
        carregar()
    }, [])

    const front = turma.filter((a) => a.curso === "Front-end")
    return <ul className="border w-fit bg-sky-200 m-2 p-2">{front.map((a) => <li key={a.id}>{a.nome}</li>)}</ul>
}
