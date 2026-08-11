"use client"

import { useState } from "react"

export default function TextareaControlada() {
    const [form, setForm] = useState<{ obs: string }>({ obs: "" })

    return (
        <div className=" flex flex-col text-center gap-2 border w-fit bg-yellow-300 m-2 p-2 "> Textarea 
            <textarea className="border m-2" value={form.obs} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm({ obs: e.target.value })} />
            <p>{form.obs}</p>
        </div>
    )
}
