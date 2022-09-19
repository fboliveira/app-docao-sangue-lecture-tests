import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ListCidades from './components/cidades/ListCidades';
import ListEstados from './components/estados/ListEstados';

const AppRoutes = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/estados" element={<ListEstados />} />
                <Route path="/cidades" element={<ListCidades />} />                
            </Routes>
        </BrowserRouter>
    );

}

export default AppRoutes;