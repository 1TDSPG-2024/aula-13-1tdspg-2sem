import Link from "next/link"

export default function page() {

  const produtos = [
    { id: 1, nome: "mouse", preco: 50, qtd: 110 },
    { id: 2, nome: "monitor", preco: 500, qtd: 20 },
    { id: 3, nome: "teclado", preco: 100, qtd: 60 }

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
          {produtos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>{p.preco}</td>
              <td>{p.qtd}</td>
              <td><Link href={`/produto/${p.id}`}>Editar</Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              Quantidade de produtos: {produtos.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
