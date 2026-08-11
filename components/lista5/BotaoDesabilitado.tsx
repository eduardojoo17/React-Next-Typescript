"use client"

import { useState } from "react"

export default function BotaoDesabilitado() {
    const [form, setForm] = useState<{ nome: string }>({ nome: "" })

    return (
        <form onSubmit={(e: React.FormEvent) => { e.preventDefault(); alert(form.nome) }} className=" flex flex-col gap-2 border w-fit bg-yellow-300 m-2 p-2 ">
            <input className="border m-2" value={form.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ nome: e.target.value })} />
            <button disabled={form.nome === ""} className="border p-2 disabled:opacity-40">enviar</button>
        </form>
    )
}
