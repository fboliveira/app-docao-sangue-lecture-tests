import { prismaClient } from "../../database/client.js";

export class GetAllEstadoController {

    async handle( request, response ) {

        const estados = await prismaClient.estado.findMany();

        // console.log(estados);

        return response.json(estados);

    }

}