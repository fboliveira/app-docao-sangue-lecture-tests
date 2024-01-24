import Link from "next/link";
import css from "styled-jsx/css";

const getAllEstados = async () => {

    const estados = await fetch('http://localhost:5000/estados', { cache: 'no-store' })

    return estados.json();

}

interface EstadoInterface {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
    updated_at: string;
}

export default async function Estado() {

    const estados : EstadoInterface[] = await getAllEstados();

    const cssMenu = "text-gray-300 bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"

    return(
        <main>
            <h1>Lista de estados</h1>
            <Link href="/estados/create" className={cssMenu}>Criar</Link>

            <ul>
                {

                    estados.map( (estado) =>{

                        return(
                            <li key={estado.id}>
                                {estado.nome}-{estado.sigla}
                            </li>
                        )

                    })

                }
            </ul>
        </main>
    )
}