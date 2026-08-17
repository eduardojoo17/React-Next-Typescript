export default function Inferior() {
  return (
    <footer className=" flex justify-center w-full bg-stone-900 text-white  text-center ">
      <a
        className=" m-1 border rounded-3xl transform hover:-translate-y-0.5"
        href="https://www.linkedin.com/in/joão-eduardo-a55373190/"
      >
        <img className="w-15 " src="linkedin-icone.png" alt="linkedin link" />
      </a>
      <a
        className="flex items-center justify-center m-1 border rounded-3xl transform hover:-translate-y-0.5"
        href="https://github.com/eduardojoo17?tab=repositories"
      >
        <img className="w-15 " src="git.png" alt="git" />
      </a>
    </footer>
  );
}
