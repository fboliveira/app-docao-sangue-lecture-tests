import jwt from 'jsonwebtoken';

export class ValidateUserController {

    async handle(request, response) {

        // Validate user
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const tokenHeaderKey = process.env.JWT_HEADER_KEY;
        
        console.log(request.headers['authorization']);

        try {
            const authorization = request.headers['authorization'].split (' ');

            console.log(authorization);

            const header = authorization[0];
            console.log ({
                header,
                tokenHeaderKey
            })

            if (header !== tokenHeaderKey) {
                return response.status(401).send({
                    message: "App Header is invalid."
                });

            }

            const token = authorization[1];

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