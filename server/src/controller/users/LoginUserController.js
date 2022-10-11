import jwt from 'jsonwebtoken';

export class LoginUserController {

    async handle(request, response) {

        // Validate user
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const tokenHeaderKey = process.env.JWT_TOKEN_HEADER_KEY;

        const data = {
            loginTime: Date(),
            user_id: 10
        }

        const token = jwt.sign(data, jwtSecretKey);

        return response.send({
            token,
            header: tokenHeaderKey
            })
    }

}