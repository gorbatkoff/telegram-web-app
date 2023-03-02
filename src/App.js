import './App.css';
import React, {useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import ProductPage from './components/ProductPage/ProductPage';
import {getListOfItems} from "./shared/API";

function App() {

    const [listOfProducts, setListOfProducts] = useState([]);

    const {tg} = useTelegram();
    const telegram = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
        tg.expand();
        console.log(telegram.initData.hash);
        // getListOfItems().then(r => setListOfProducts(r))
    }, [])

    return (
        <div className="App">

            <Routes>
                <Route index element={<ProductList items={listOfProducts}/>}/>
                <Route path={'/products/:channel/:id'} element={<ProductPage/>}/>
                <Route path={'/form'} element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;