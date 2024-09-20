import Link from "next/link"

export default function(){
    return(
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/produtos">Produtos</Link></li>
            </ul>
        </nav>
    )
}