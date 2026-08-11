"use client"

import { useState } from "react"

export default function DoisInputs() {
    const [nome, setNome] = useState<string>("")
    const [curso, setCurso] = useState<string>("")

    return (
        <div className=" flex flex-col text-center gap-2 border w-fit bg-yellow-500 m-2 "> dois inputs
            <input className="border m-2" placeholder="digite nome aqui:" value={nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
            <input className="border m-2" placeholder="digite o curso aqui:" value={curso} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurso(e.target.value)} />

            <div className="flex flex-col border">
                <p className=" m-2  p-2">{nome}</p>

                <p className=" m-2  p-2">{curso}</p>

            </div>
        </div>


    )
}