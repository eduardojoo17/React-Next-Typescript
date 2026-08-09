"use client";
import { useState } from "react";

export default function ContadorNumber() {
  const [n, setN] = useState<number>(0);
  return (
    <div className="flex flex-col justify-center text-center border-2 bg-linear-to-r/increasing from-red-700 to-orange-950 ">
      <div className="">
        <p className=" font-bold text-2xl">{n}</p>
        <button className="border p-2" onClick={() => setN(n + 1)}>
          +1
        </button>
        <button className="border p-2" onClick={() => setN(n - 1)}>
          -1
        </button>
        <button className="border p-2" onClick={() => setN(0)}>
          zerar
        </button>
        <button className="border p-2">{n % 2 === 0 ? "par" : "impar"}</button>
      </div>
    </div>
  );
}
