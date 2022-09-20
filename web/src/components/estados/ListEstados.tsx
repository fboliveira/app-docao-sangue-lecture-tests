import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import Menu from '../menu/Menu';

// Here
export interface EstadoModel {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
}

const ListEstados = () => {

    const [ estados, setEstados ] = useState<EstadoModel[]>([]);

    const loadData = () => {
        console.log('loadData()');
        api.get('/estados')
            .then(response => {
                console.log(response);
                setEstados(response.data);
            })
    }

    useEffect(() => {
        loadData();
    },[]);


    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Sigla</th>
                    <th>Criação</th>
                </tr>
            </thead>
            <tbody>

                { estados.map( item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.sigla}</td>
                        <td>{item.created_at}</td>
                    </tr>   
                ) )
                
                }

            </tbody>
        </table>
        </>        
    );

}

export default ListEstados;