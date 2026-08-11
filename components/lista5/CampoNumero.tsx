"use client"
import { useState } from "react"

export default function CampoNumero () {
    const [form, setForm] = useState<{ nota: number }>({ nota: 0 })

    return (
        <div className="border">
            <input type="number" className="border m-2" value={form.nota} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ nota: Number(e.target.value) })} />
            <p>nota: {form.nota}</p>
        </div>
    )
}