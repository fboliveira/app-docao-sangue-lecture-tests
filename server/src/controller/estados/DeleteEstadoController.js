import { prismaClient } from "../../database/client.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";

export class DeleteEstadoController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            const estado = await prismaClient.estado.delete({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
                console.log(`[DeleteEstadoController] Estado id: ${id} does not exist!`);
                return response.status(400).json({
                    message: "Id does not exist"
                })
            }
        }

        return response.json(estado);
    }

}