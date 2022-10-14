import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
export interface EstadoModel {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
}

const ListEstados = () => {

    const [estados, setEstados] = useState<EstadoModel[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        
        const token = window.localStorage.getItem('token') || undefined;

        if ( token === undefined ) {
            navigate('/login')
        }

        const header = window.localStorage.getItem('prefix');

        const config = {
            headers: {
                "Authorization" : `Bearer ${header} ${token}`
            }
        }

        console.log('[ListEstados] loadData():');
        console.log(config.headers);
        api.get('/estados', config)
            .then(response => {
                console.log(response);
                setEstados(response.data);
            })
    }, [navigate]);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>

                    {estados.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.sigla}</td>
                            <td>{item.created_at}</td>
                            <td><Link to={`/estados/show/${item.id}`}>Visualizar</Link></td>
                        </tr>
                    ))

                    }

                </tbody>
            </table>
        </>
    );

}

export default ListEstados;