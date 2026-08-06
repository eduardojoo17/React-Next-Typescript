type aluno ={id:number,nome:string}


export default function ArrayTipado(){
    const turma : aluno[] = [{id:1,nome:"pedro"},{id:2,nome:"Alonso" }]
    return(
        <ul>
            {turma.map(a=> <li key={a.id}>{a.nome} </li>)}
        </ul>
    )
}