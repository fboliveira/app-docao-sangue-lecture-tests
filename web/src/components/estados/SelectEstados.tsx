import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { EstadoModel } from "./ListEstados";

interface SelectEstadosProps {
    id : number;
    setId : Dispatch<SetStateAction<number>>;
}

const SelectEstados = (props : SelectEstadosProps) => {

    const [estados, setEstados] = useState<EstadoModel[]>([]);
    // const [ id, setId ] = useState(0);

    const handleOnChangeId = (e : React.ChangeEvent<HTMLSelectElement>) => {
        props.setId(parseInt(e.target.value))
        // setId(parseInt(e.target.value));
        // props.setId(id);
    }

    useEffect(() => {
        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })
    }, []);

    return (
        <>
            <select name="estado" 
                id="estado"
                value={props.id} 
                onChange={handleOnChangeId} >
                <option value="0" selected>Selecione</option>
                {estados.map(item => (
                    <option value={item.id}>{item.nome}</option>
                ))}
            </select>
        </>
    )

}

export default SelectEstados;