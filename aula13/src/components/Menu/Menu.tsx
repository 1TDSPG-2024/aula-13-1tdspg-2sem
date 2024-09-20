import Link from "next/link";

export default function Menu() {
    return(
      <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/produtos">Produtos</Link></li> 
            {/* Componente Link apenas para rotas internas, para rotas externas é a tag a */}
        </ul>
      </nav>
    )
  }