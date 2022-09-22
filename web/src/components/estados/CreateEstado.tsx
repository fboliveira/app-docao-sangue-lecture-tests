import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateEstado = () => {

    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla ] = useState('');

    const navigate = useNavigate();

    const handleNewEstado = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateNome() || !validateSigla()) {
            return false;
        }

        const data = {
            nome,
            sigla
        }

        try {
            await api.post('/estados', data);
            navigate('/estados');
        } catch(error) {
            alert('Erro ao cadastrar o Estado!');
            console.error(error);
        }

    }
    
    const validateNome = () => {
        console.log("validateNome");
        if (nome === "") {
            alert('Informe o nome do Estado!');
            document.getElementById('nome')?.focus();
            return false;
        }
        return true;
    }

    const validateSigla = () => {
        console.log("validateSigla");

        if (sigla === "") {
            alert('Informea sigla do Estado!');
            document.getElementById('sigla')?.focus();
            return false;
        }
        return true;
    }

    return (
        <div>
            <h3>Cadastrar Estado</h3>
            <form onSubmit={handleNewEstado} >

                <div>
                    <label 
                        htmlFor="nome"
                    >Nome</label>

                    <input 
                        type="text" 
                        placeholder="Nome do estado"
                        name="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)} 
                        id="nome" />
                </div>

                <div>
                    <label 
                        htmlFor="sigla"
                    >Sigla</label>

                    <input 
                        type="text" 
                        placeholder="Sigla do estado"
                        name="sigla"
                        value={sigla}
                        onChange={e => setSigla(e.target.value)} 
                        id="sigla" />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateEstado;