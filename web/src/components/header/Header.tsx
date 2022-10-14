import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import './header.css'

interface HeaderProps {
    name?: string
}

const Title = styled.header`
    background-color: #a3dd55;
    color: #ffd5aa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`

const Button = styled.button`
display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;  
`

const StyledLink = styled(Link)`
background-color: #d2e4c3;
color: #ffd5aa;
`

export const Header = (props : HeaderProps) => {

    const navigate = useNavigate();

    const [ userName, setUserName ] = useState<string | undefined>('');

    const handleLogout = () => {
        window.localStorage.clear();
        setUserName(undefined);
        navigate('/');
    }

    useEffect(() => {
        setUserName(props.name);
    },[props])

    return (
        <Title>
            <h1>Sistema de Doação de Sangue</h1>
            {userName ? 
                <div>
                    <h2>Usuário: {userName}</h2><Button onClick={handleLogout}>Sair</Button> 
                </div>
                : 
                <h2><StyledLink to="/login">Login</StyledLink></h2>}
                
        </Title>
    );
}

export default Header;