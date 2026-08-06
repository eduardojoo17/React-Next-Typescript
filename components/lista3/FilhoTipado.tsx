type filho ={
    children: React.ReactNode
}

export default function FilhoTipado({children}:filho){
    return (
        <div>
            {children}
        </div>
    )
}