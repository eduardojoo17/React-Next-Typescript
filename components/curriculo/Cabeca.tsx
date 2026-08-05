type dados = {
  nome: string;
  email: string;
  cidade: string;
  celular: string;
};
export default function Cabeca({ nome, email, cidade, celular }: dados) {
  return (
    <header className="text-black ">
      <h1 className="flex flex-col justify-center text-center text-4xl bg-cyan-100">
        {nome}
      </h1>
      <br />
      <table>
        <tbody>
          <tr>
            <th>Email:</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Cidade:</th>
            <td>{cidade}</td>
          </tr>
          <tr>
            <th>Celular:</th>
            <td>{celular}</td>
          </tr>
        </tbody>
      </table>
    </header>
  );
}
