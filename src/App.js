import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import LinkGenerate from './components/LinkGenerate/LinkGenerate';
import UserBalance from './components/UserBalance/UserBalance';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <LinkGenerate />
            <UserBalance />
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'/product/:id'} element={<ProductPage />}/>
                <Route path={'/form'} element={<Form />}/>
            </Routes>
        </div>
    );
}

export default App;