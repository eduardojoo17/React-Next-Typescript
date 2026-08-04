type curso = {
  curso: string;
};

export default function Curso({ curso }: curso) {
  return <p>{curso}</p>;
}
