import Link from "next/link";


export default function() {

    const Produtos = [
        {id:1, nome: "mouse", preco: 50, qtd:100},
        {id:2, nome: "monitor", preco: 1500, qtd:20},
        {id:3, nome: "teclado", preco: 130, qtd:40},

    ];
    <div>
        <h2>Produtos</h2>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preco</th>
                    <th>QTD</th>
                </tr>
            </thead>
            <tbody>
                {Produtos.map((p) => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.preco}</td>
                        <td>{p.qtd}</td>
                        <td><Link href={`/produto/${p.id}`}></Link> </td>
                            </tr>
             ))}


            </tbody>
            </table>

    </div>
}