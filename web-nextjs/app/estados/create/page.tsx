"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation";

export default function CreateEstado() {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');

    const { push } = useRouter()

    async function handleSubmit(event : FormEvent) {
        event.preventDefault();

        const data = {
            nome,
            sigla
        }

        const requestInit : RequestInit = {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {
            
            const response = await fetch('http://localhost:5000/estados', requestInit)

            if (response.ok) {
                const estado = await response.json();
                const { id } = estado;
                window.alert(`Estado inserido com sucesso! Id: ${id}`)
                // Redirect -> /estados
                push('/estados')
            }

        } catch (error) {
            
        }

    }


    return(
        <main className="container m-auto">

            <h1>Cadastro de estados: {nome}-{sigla}</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label 
                        htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        onChange={(event) =>{
                            setNome(event.target.value)
                        }}
                        />
                </div>

                <div>
                    <label
                        htmlFor="sigla">Sigla</label>
                    <input
                        type="text"
                        name="sigla"
                        id="sigla" 
                        onChange={(event) => {
                            setSigla(event.target.value)
                        }}/>
                </div>
                <div>
                    <button 
                        type="submit">Cadastrar</button>  
                    <button type="reset">Limpar</button> 
                </div>

            </form>

        </main>
    )

}