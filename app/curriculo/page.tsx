"use client";
import Cabeca from "@/components/curriculo/Cabeca";
import Corpo from "@/components/curriculo/Corpo";
import Inferior from "@/components/curriculo/Inferior";
import { useState } from "react";

export default function Curriculo() {
  const [mostrar, setMostar] = useState<boolean>(false);

  return (
    <div className="bg-amber-50">
      <Cabeca selecionar={(n) => setMostar(n === "sobre")} />

      <Corpo mostrar={mostrar} />
      <Inferior />
    </div>
  );
}
