import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { EstadoModel } from "./ListEstados";

const ShowEstado = () => {

    const [estado, setEstado] = useState<EstadoModel>()

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/estados/${id}`)
            .then(response => {
                console.log(response);
                setEstado(response.data);
            })
    }, [id]);

    const handleDeleteEstado = async () => {
        if (window.confirm("Confirma Exclusão do Estado?")) {

            const data = {
                id
            }

            try {
                await api.delete('/estados', { data: {
                    data
                }});
                navigate('/estados');
            } catch(error) {
                alert('Erro ao excluir o Estado!');
                console.error(error);
            }            
        }
    }

    return (

        <div>
            <ul>
                <li key={estado?.id}>{estado?.id}</li>
                <li>{estado?.nome}</li>
                <li>{estado?.sigla}</li>
                <li>{estado?.created_at}</li>
            </ul>

            <div>
                <Link to={`/estados/update/${estado?.id}`}>Atualizar</Link>
            </div>
            <div>
                <button onClick={handleDeleteEstado}>Excluir</button>
            </div>

        </div>
    );

}

export default ShowEstado;