"use client"

import { useState } from "react"

export default function ContadorCaracteres() {
    const [form, setForm] = useState<{ nome: string }>({ nome: "" })

    return (
        <div className=" text-center border w-fit bg-yellow-300 m-2 p-2 ">
            <input className="border m-2" value={form.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ nome: e.target.value })} />
            <p className="font-bold">{form.nome.length} caractere(s)</p>
        </div>
    )
}
