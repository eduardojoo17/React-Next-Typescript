"use client"

import { useState } from "react"

export default function InputControlad2() {
    const [controle, setControle] = useState<string>("")

    return (
        <div className=" flex flex-col  gap-2 border w-fit bg-yellow-200 m-2 ">
            <input className="border m-2" placeholder="digite aqui:" value={controle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setControle(e.target.value)} />
            <p className="border m-2  p-2">olá, {controle}</p>

            <button className="border" onClick={() => setControle("")}>limpar</button>

        </div>

    )
}