import CartaoPerfil from "@/components/CartaoDePerfil";
import Contador from "@/components/Contador";
import Header from "@/components/Header";
import Rodape from "@/components/Rodape";
import SecaoTurma from "@/components/SecaoTurma";
import Titulo from "@/components/Titulo";

export default function Home() {
  let nome: string = "Daniel Guimarães";
  let curso: string = "TI";

  return (
    <div className=" bg-amber-200 flex-col ">
      <h1>Turma Front-end 2026</h1>

      <Header />

      <div className="flex ">
        <CartaoPerfil />
        <CartaoPerfil />
        <CartaoPerfil />
      </div>
      {/*comentario sobre algo*/}
      <p>8 + 1 ={8 + 1}</p>

      <h2>"Olá,{nome}"</h2>

      <h1 className="font-serif text-black bg-amber-50 rounded-md shadow-md font-bold">
        {nome} esta cursando {curso} no Senai{" "}
      </h1>

      <img src="logo.png" alt="foto do aluno " width={100} />

      <>
        <CartaoPerfil />
      </>

      <Contador />

      <SecaoTurma />

      <Rodape />
    </div>
  );
}
