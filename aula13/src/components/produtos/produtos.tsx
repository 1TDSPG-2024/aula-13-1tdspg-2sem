import Link from "next/link";

export default function(){

    const produtos = [
        {id:1, nome:"mouse", preco:50, qnt:100},
        {id:2, nome:"monitor", preco:1500, qnt:20},
        {id:3, nome:"teclado", preco:130, qnt:49},
    ];
    return(
        <div>
             <h1>Insira os produtos aqui</h1>
             <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PRECO</th>
                        <th>QTD</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.qnt}</td>
                            <td><Link href={'produtos/${p.id}'}>Editar</Link></td>
                        </tr>
                    ))}
                </tbody>
             </table>
        </div>
    )
}