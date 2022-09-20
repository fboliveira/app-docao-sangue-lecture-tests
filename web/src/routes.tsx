import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ListCidades from './components/cidades/ListCidades';
import ListEstados from './components/estados/ListEstados';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import Menu from './components/menu/Menu';

const AppRoutes = () => {

    return(
        <BrowserRouter>
            <Header />
            <Menu />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/estados" element={<ListEstados />} />
                <Route path="/cidades" element={<ListCidades />} />                
            </Routes>
            <Footer />
        </BrowserRouter>
    );

}

export default AppRoutes;