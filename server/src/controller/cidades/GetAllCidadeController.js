import { prismaClient } from "../../database/client.js";

export class GetAllCidadeController {

    async handle( request, response ) {

        const estados = await prismaClient.cidade.findMany({
            include: {
                estado: true
            }
        });

        return response.json(estados);

    }

}