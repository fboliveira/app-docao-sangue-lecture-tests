import './header.css'

interface HeaderProps {
    name?: string
}

export const Header = (props : HeaderProps) => {
    return (
        <header>
            <div className='header'>
                <h1>Sistema de Doação de Sangue</h1>
                {props.name ? <h2>Usuário: {props.name}</h2> : <h2>Login</h2>}
            </div>
        </header>
    );
}

export default Header;