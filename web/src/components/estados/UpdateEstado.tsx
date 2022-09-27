import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const UpdateEstado = () => {

    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla ] = useState('');    
    const { id } = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/estados/${id}`)
            .then(response => {
                console.log(response);
                setNome(response.data.nome);
                setSigla(response.data.sigla);
            })
    }, [id]);

    const handleUpdateEstado = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateNome() || !validateSigla()) {
            return false;
        }

        const data = {
            id,
            nome,
            sigla
        }

        try {
            await api.put('/estados', data);
            navigate('/estados');
        } catch(error) {
            alert('Erro ao atualizar o Estado!');
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
            <h3>Atualizar Estado: {id}-{nome}</h3>
            <form onSubmit={handleUpdateEstado} >

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

export default UpdateEstado;