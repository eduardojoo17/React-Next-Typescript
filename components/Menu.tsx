export default function Menu() {
  return (
    <main className=" flex flex-col border m-2">
      <nav className="flex  gap-2 justify-center">
        <button className="border-2 rounded-2xl m-1 py-2 px-2 bg-linear-to-r from-cyan-500 to-blue-800">
          <a href="/"> Inicio</a>
        </button>
        <button className="border-2 rounded-2xl m-1 py-2 px-2 bg-linear-to-r from-cyan-500 to-blue-800">
          <a href="/React1"> React #1</a>
        </button>
        <button className="border-2 rounded-2xl m-1 py-2 px-2 bg-linear-to-r from-cyan-500 to-blue-800">
          <a href="/React2"> React #2</a>
        </button>
        <button className="border-2 rounded-2xl m-1 py-2 px-2 bg-linear-to-r from-cyan-500 to-blue-800">
          <a href="/React3"> React #3</a>
        </button>
        <button className="border-2 rounded-2xl m-1 py-2 px-2 bg-linear-to-r from-cyan-500 to-blue-800 ">
          <a href="/React4"> React #4</a>
        </button>
        <button className="border-2 rounded-2xl m-1 py-2 px-2 bg-linear-to-r from-cyan-500 to-blue-800 ">
          <a href="/React5"> React #5</a>
        </button>
        <button className="border-2 rounded-2xl m-1 py-2 px-2 bg-linear-to-r from-cyan-500 to-blue-800 ">
          <a href="/React6"> React #6</a>
        </button>
        <button className="border-2 rounded-2xl m-1 py-2 px-2 bg-linear-to-r from-cyan-500 to-blue-800">
          <a href="/curriculo">Curriculo</a>
        </button>
        <button className="border-2 rounded-2xl m-1 py-2 px-2 bg-linear-to-r from-cyan-500 to-blue-800">
          <a href="/Formulario">Formulário</a>
        </button>
      </nav>
    </main>
  );
}
