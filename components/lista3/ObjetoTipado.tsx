type Aluno ={
    id:number;
    nome:string;
    curso:string;
}



export default function ObjetoTipado(){
    const a :Aluno= {id:10,nome:"oliver",curso:"back-end"}
return (
    <div>{a.id},{a.nome},{a.curso}</div>
)
}