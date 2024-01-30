import { getAllEstados } from "@/app/service/estados";
import CreateCidade from "./create"
import { EstadoInterface } from "@/app/types/estados";

export default async function CreateCidadeWrapper() {

    const estados : EstadoInterface[] = await getAllEstados();

    return(
        <CreateCidade estados={estados} />
    )

}