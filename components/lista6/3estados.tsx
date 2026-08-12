"use client"

import { useEffect, useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number; presente: boolean }

export default function TresEstados() {
    const [turma, setTurma] = useState<Aluno[]>([])
    const [carregando, setCarregando] = useState<boolean>(true)
    const [erro, setErro] = useState<string | null>(null)

    useEffect(() => {
        async function carregar() {
            try {
                const res = await fetch("https://prof.giango.com.br/api/turma")
                if (!res.ok) throw new Error()
                setTurma(await res.json())
            } catch {
                setErro("falha")
            }
            setCarregando(false)
        }
        carregar()
    }, [])

    if (carregando) return <p className="border w-fit m-2 p-2">carregando…</p>
    if (erro) return <p className="text-red-500 border w-fit m-2 p-2">{erro}</p>
    return <ul className="border w-fit bg-sky-200 m-2 p-2">{turma.map((a) => <li key={a.id}>{a.nome}</li>)}</ul>
}
