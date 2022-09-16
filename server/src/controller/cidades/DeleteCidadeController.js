import { prismaClient } from "../../database/client.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";

export class DeleteCidadeController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            const cidade = await prismaClient.cidade.delete({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
                console.log(`[DeleteCidadeController] Estado id: ${id} does not exist!`);
                return response.status(400).json({
                    message: "Id does not exist"
                })
            }
        }

        return response.json(cidade);
    }

}