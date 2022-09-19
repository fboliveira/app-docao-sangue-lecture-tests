import { useEffect, useState } from 'react';
import api from '../../services/api';
import { EstadoModel } from '../estados/ListEstados';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import Menu from '../menu/Menu';

// Here
interface CidadeModel {
    id: number;
    nome: string;
    created_at: string;
    estado: EstadoModel;
}

const ListCidades = () => {

    const [ cidades, setCidades ] = useState<CidadeModel[]>([]);

    const loadData = () => {
        console.log('loadData()');
        api.get('/cidades')
            .then(response => {
                console.log(response);
                setCidades(response.data);
            })
    }

    useEffect(() => {
        loadData();
    },[]);


    return(
        <>
        <Header />
        <Menu />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Criação</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>

                { cidades.map( item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.created_at}</td>
                        <td>{item.estado.sigla}</td>
                    </tr>   
                ) )
                
                }

            </tbody>
        </table>
        <Footer />
        </>        
    );

}

export default ListCidades;