import { ChangeEventHandler, use } from "react"
import { EstadoInterface } from "@/app/types/estados";

interface EstadosSelectInterface {

    estados : EstadoInterface[]
    value: string
    setValue : ChangeEventHandler<HTMLSelectElement>

}

export default function EstadosSelect({ estados, value, setValue } : EstadosSelectInterface) {

    return(
        <>
            <label htmlFor="estado">Estados: </label>
            <select name="estado" id="estado" value={value} onChange={setValue}>
                
                <option value="" selected disabled>Selecione:</option>

                {
                    estados.map((estado) => {
                        return(
                            <option key={estado.id} value={estado.id}>{estado.nome}</option>
                        )
                    })
                }

            </select>
        </>
    )

}