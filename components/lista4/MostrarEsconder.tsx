"use client"

import { useState } from "react"


export default function MostrarEsconder(){
const [v, setV] = useState<boolean>(false);

    return(
      <div>
        {v && <p> visivelmente visivel </p>}
        <button onClick={()=> setV(!v)}>
          visualisar
        </button>
      </div>  
    )
}