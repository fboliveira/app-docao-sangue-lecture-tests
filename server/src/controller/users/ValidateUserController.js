import jwt from 'jsonwebtoken';

export class ValidateUserController {

    async handle(request, response) {

        // Validate user
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const tokenHeaderKey = process.env.JWT_TOKEN_HEADER_KEY;
        
        console.log(request.header);

        try {
            const token = request.header(tokenHeaderKey);
            const valid = jwt.verify(token, jwtSecretKey);


            if (valid) {
                return response.send({ 
                    message: "Token is valid."
                })
            } else {
                return response.status(401).send({
                    message: "Token is invalid."
                });
            }

        } catch (error) {
            return response.status(401).send(error);
        }

    }

}