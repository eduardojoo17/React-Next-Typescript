"use client"
import { useEffect, useState } from "react"

type Aluno = { id: number; nome: string; curso: string; nota: number; presente: boolean }

export default function CardTurma() {
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
        <div className="border w-fit">
            <p >{turma.length} alunos</p>

           
            {turma.map((a) => <div className="border bg-while rounded 2x1 p-4 shadow-md w-fit" key={a.id}>{a.nome}</div>)}
           

        </div>
    )
}