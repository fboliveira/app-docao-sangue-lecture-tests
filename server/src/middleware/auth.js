import jwt from 'jsonwebtoken';

export class AuthMiddleware {

    async handle(request, response, next) {

        // Validate user
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const tokenHeaderKey = process.env.JWT_HEADER_KEY;

        console.log("[AuthMiddleware] Validating...");

        console.log(request.headers['authorization']);

        try {
            const authorization = request.headers['authorization'].split (' ');

            const header = authorization[0];
            const token = authorization[1];
            
            console.log ({
                header,
                tokenHeaderKey
            });

            if (header !== tokenHeaderKey) {
                return response.status(401).send({
                    message: "App Header is invalid."
                });
                
            }
            
            const valid = jwt.verify(token, jwtSecretKey);
            
            if (valid) {
                return next()
            } else {
                return response.status(401).send({
                    message: "Invalid request!"
                });
            }

        } catch (error) {
            return response.status(401).send(error.message);
        }        
        
    }

}