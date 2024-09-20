import Link from "next/link"

export default function Produtos() {
  const produtos = [
    {id: 1, nome:"sardinha", preco:9.50, qtd: 100},
    {id: 2, nome:"arroz", preco:7.50, qtd: 200},
    {id: 1, nome:"limão", preco:2.50, qtd: 150},
  ]
  
  return (
    <div>
      <h2>Produtos</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>PRECO</th>
            <th>QTD</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
            {produtos.map((p)=>(
              <tr key ={p.id}>
                <td>{p.id}</td>
                <td>{p.nome}</td>
                <td>{p.preco}</td>
                <td>{p.qtd}</td>
                <td> <Link href={`/produto/${p.id}`}>Editar</Link></td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              Quantidade de produtos  : {produtos.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
