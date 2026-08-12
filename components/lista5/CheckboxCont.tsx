
"use client"
import { useState } from "react"

export default function CheckboxControlado2() {
    const [form, setForm] = useState<{ bolsista: boolean }>({ bolsista: false })

    return (
        <label className="flex flex-col border m-2 w-fit">
            <input type="checkbox" checked={form.bolsista} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, bolsista: e.target.checked })} />
            bolsista? {form.bolsista? "sim":"não"}
        </label>
    )
}