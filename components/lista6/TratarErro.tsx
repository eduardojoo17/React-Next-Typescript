"use client"

import { useEffect, useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number; presente: boolean }

export default function TratarErro() {
    const [turma, setTurma] = useState<Aluno[]>([])
    const [erro, setErro] = useState<string | null>(null)

    useEffect(() => {
        async function carregar() {
            try {
                const res = await fetch("https://prof.giango.com.br/api/turma")
                if(!res.ok) throw new Error("aluno não encontrado("+res.status+")")
                setTurma(await res.json())
            } catch (e){
                setErro((e as Error).message)
            }
        }
        carregar()
    }, [])

    if (erro) return <p className="text-red-500 border w-fit m-2 p-2">{erro}</p>
    return <ul className="border w-fit bg-sky-200 m-2 p-2">{turma.map((a) => <li key={a.id}>{a.nome}</li>)}</ul>
}
