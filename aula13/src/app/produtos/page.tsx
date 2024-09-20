import Link from "next/link"

export default function Produtos(){
    const produtos =[
        {id:1,nome:"mouse",preco:50,qtd:100},
        {id:2,nome:"teclado",preco:200,qtd:40},
        {id:3,nome:"monitor",preco:300,qtd:23}
        
    ]
    return(
      <div>
      <h1>Produtos</h1>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>PREÇO</th>
                <th>QUANTIDADE</th>


            </tr>
        </thead>
        <tbody>
            {produtos.map(p=>(
                <tr> key = {p.id}
                <td>{p.id}</td>
                <td>{p.nome}</td>
                <td>{p.preco}</td>
                <td>{p.qtd}</td>
                <td><Link href={(`/produtos/${p.id}`)}>Editar</Link> </td>
                </tr>
            ))}
            <tfoot>
                <tr>
                    <td>
                        Quantidade de produtos : {produtos.length}
                    </td>
                </tr>
            </tfoot>
        </tbody>
      </table>
      </div>
    )
  }