import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const LoginUser = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogged, setLogged] = useState(false);

    const navigate = useNavigate();

    const handleLoginUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email,
            password
        }


        try {
            await api.post('/users/login', data)
                .then(response => {

                    const { id, nome, token, header } = response.data;

                    window.localStorage.setItem('userid', id);

                    window.localStorage.setItem('username', nome);

                    window.localStorage.setItem('token', token);
                    window.localStorage.setItem('prefix', header);

                    // setLogged(true);
                    navigate('/');
                    window.location.reload();

                })
                .catch(data => {

                    const response = data.response;

                    const { message } = response.data;

                    if (response.status === 403) {
                        window.alert(message);
                    }
                });

        } catch (error) {
            console.error(error);
        }

        // if (isLogged) {
        //     console.log('Redirecting...');
        //     navigate('/');
            
        // }

    }

    return (
        <div>
            <form onSubmit={handleLoginUser} >

                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    required
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default LoginUser;