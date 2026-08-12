"use client"

import { useEffect, useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number; presente: boolean }

export default function BotaoRecarregar() {
    const [turma, setTurma] = useState<Aluno[]>([])
    const [chave, setChave] = useState<number>(0)

    useEffect(() => {
        async function carregar() {
            const res = await fetch("https://prof.giango.com.br/api/turma")
            setTurma(await res.json())
        }
        carregar()
    }, [chave])

    return (
        <div className="border w-fit bg-sky-200 m-2 p-2">
            <button className="border p-2" onClick={() => setChave(chave + 1)}>recarregar</button>
            <ul>{turma.map((a) => <li key={a.id}>{a.nome}</li>)}</ul>
        </div>
    )
}
