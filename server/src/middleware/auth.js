import jwt from 'jsonwebtoken';

export class AuthMiddleware {

    async handle(request, response, next) {

        // Validate user
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const tokenHeaderKey = process.env.JWT_HEADER_KEY;

        console.log("[AuthMiddleware] Validating...");

        // console.log(request.headers['authorization']);

        try {
            const authorization = request.headers['authorization'].split (' ');

            const bearer = authorization[0];
            const header = authorization[1];
            const token = authorization[2];
            
            console.log ({
                bearer,
                header,
                tokenHeaderKey,
                token
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