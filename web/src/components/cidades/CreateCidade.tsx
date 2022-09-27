import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { EstadoModel } from "../estados/ListEstados";
import SelectEstados from "../estados/SelectEstados";

const CreateCidade = () => {

    const [ nome, setNome ] = useState('');
    const [ estadoId, setEstadoId ] = useState(0);

    const navigate = useNavigate();

    const [estados, setEstados] = useState<EstadoModel[]>([]);

    useEffect(() => {
        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })
    }, []);    

    const handleNewCidade = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            estado_id : estadoId
        }

        try {
            await api.post('/cidades', data);
            navigate('/cidades');
        } catch(error) {
            alert('Erro ao cadastrar a Cidade!');
            console.error(error);
        }

    }    

    return (
        <div>
            <h3>Cadastrar Cidade</h3>
            <form onSubmit={handleNewCidade} >

                <div>
                    <label 
                        htmlFor="nome"
                    >Nome</label>

                    <input 
                        type="text" 
                        placeholder="Nome da cidade"
                        name="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)} 
                        id="nome" />
                </div>

                <div>
                    <label 
                        htmlFor="estado_id"
                    >Estado</label>

                    <input 
                        type="text" 
                        placeholder="Código do Estado"
                        name="estado_id"
                        value={estadoId}
                        onChange={e => setEstadoId(parseInt(e.target.value))} 
                        id="estado_id" />

                    <select name="estado" 
                        id="estado" 
                        value={estadoId}
                        onChange={e => setEstadoId(parseInt(e.target.value))}>
                        <option value="0" selected>Selecione</option>
                        { estados.map( item => (
                            <option value={item.id}>{item.nome}</option>
                        ) ) }
                    </select>


                    <SelectEstados id={estadoId} setId={setEstadoId} />


                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );    

}

export default CreateCidade;