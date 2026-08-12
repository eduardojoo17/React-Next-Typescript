"use client"
import { useEffect, useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number; presente: boolean }

export default function EstadoLoading() {
    const [turma, setTurma] = useState<Aluno[]>([])
    const [carregando, setCarregando] = useState<boolean>(true)

    useEffect(() => {
        async function carregar() {
            const res = await fetch("https://prof.giango.com.br/api/turma")
            setTurma(await res.json())
            setCarregando(false)
        }
        carregar()
    }, [])

    if (carregando) return <p className="border w-fit m-4">carregando...</p>




    return (
        <div>
            <p>{turma.length} alunos</p>
            <ul className="border w-fit m-2">{turma.map((a) => <li key={a.id}>{a.nome}-{a.curso}</li>)}</ul>
        </div>
    )
}