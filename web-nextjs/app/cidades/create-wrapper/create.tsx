"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation";
import Input from "@/app/components/forms/Input";
import EstadosSelect from "@/app/components/forms/EstadosSelect";
import { EstadoInterface } from "@/app/types/estados";

interface CreateCidadeInterface {
    estados : EstadoInterface[]
}

export default function CreateCidade({estados} : CreateCidadeInterface) {
    
    const [nome, setNome] = useState('');
    const [estado, setEstado] = useState('');
    
    const { push } = useRouter()
    
    async function handleSubmit(event : FormEvent) {
        event.preventDefault();

        const data = {
            nome,
            estado_id : parseInt(estado)
        }

        const requestInit : RequestInit = {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {
            
            const response = await fetch('http://localhost:5000/cidades', requestInit)
            
            if (response.ok) {
                const cidade = await response.json();
                const { id } = cidade;
                window.alert(`Cidade inserida com sucesso! Id: ${id}`)
                // Redirect -> /estados
                push('/cidades')
            }

        } catch (error) {
            
        }

    }


    return(
        <main className="container m-auto">

            <h1>Cadastro de estados: {nome}-{estado}</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <Input name="nome" label="Nome" setValue={(event) =>{
                        setNome(event.target.value)
                    }} />
                </div>

                <Input name="estado" label="Estado" value={estado} setValue={(event) => {
                    setEstado(event.target.value)
                }} />

                <EstadosSelect estados={estados} value={estado} setValue={(event) => {
                    setEstado(event.target.value)
                }} />

                <label htmlFor="estado">Estados: </label>
                <select name="estado" id="estado" value={estado} onChange={(event) => {
                    setEstado(event.target.value)
                }}>
                    
                <option value="" selected disabled>Selecione:</option>

                {
                    estados.map((estado) => {
                        return(
                            <option key={estado.id} value={estado.id}>{estado.nome}</option>
                        )
                    })
                }

            </select>                
                
                <div>
                    <button 
                        type="submit">Cadastrar</button>  
                    <button type="reset">Limpar</button> 
                </div>

            </form>

        </main>
    )

}