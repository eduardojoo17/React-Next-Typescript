"use client"

import { useState } from "react"

export default function Likes(){
    const [lk,setLk] = useState<number>(0)
    return(
        <div className="border w-fit p-2 m-2">
            <button className="border m-2 w-30 h-30" onClick={()=> setLk(lk+1)}>❤️</button>
            <p className="border w-fit">{lk} likes</p>
        </div>
    )
}