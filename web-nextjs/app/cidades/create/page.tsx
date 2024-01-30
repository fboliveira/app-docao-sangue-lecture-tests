import { FormEvent } from "react"
import { redirect } from "next/navigation";
import Input from "@/app/components/forms/Input";
import EstadosSelect from "@/app/components/forms/EstadosSelect";
import { EstadoInterface } from "@/app/types/estados";

import { getAllEstados } from "@/app/service/estados";

export default async function CreateCidade() {
    
    const estados : EstadoInterface[] = await getAllEstados();

    async function handleSubmit(event : FormEvent) {
        event.preventDefault();

        const nome = document.getElementById("nome")?.nodeValue;
        const estado = document.getElementById("estado")?.nodeValue;

        const data = {
            nome,
            estado_id : Number(estado)
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
                redirect('/cidades')
            }

        } catch (error) {
            
        }

    }


    return(
        <main className="container m-auto">

            <h1>Cadastro de estados:</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <Input name="nome" label="Nome" setValue={(event) => {

                    }} />
                </div>

                <Input name="estado" label="Estado" setValue={(event) => {
                    
                }} />

                <EstadosSelect estados={estados} value="" setValue={(event) => {
                    
                }} />

                <label htmlFor="estado">Estados: </label>
                <select name="estado" id="estado" onChange={(event) => {
                    
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