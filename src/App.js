import './App.css';
import React, {useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import ProductPage from './components/ProductPage/ProductPage';
import {getListOfItems} from "./shared/API";
import axios from "axios";

function App() {

    const [listOfProducts, setListOfProducts] = useState([]);

    const initUserAndChannel = async () => {
        try {
            const request = await axios.post('https://test.botweb.io/api/bot/user/', {
                body: {
                    "bot_id": 123123,
                    "bot_user": 321312,
                    "hash": "90ae8ec69d9f1f9367f0a92aee35f3e9c425e322a07aa433b6f7b40fc124e1af"
                }
            })

            const response = await request;

            console.log(response);

        } catch (error) {
            console.log(error)
        }
    }

    const {tg} = useTelegram();
    const telegram = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
        tg.expand();
        console.log(telegram.initData);
        getListOfItems().then(r => setListOfProducts(r))
        // initUserAndChannel().then(r => console.log(r));
    }, [])

    return (
        <div className="App">

            <Routes>
                <Route index element={<ProductList items={listOfProducts}/>}/>
                <Route path={'/products/channel/:id'} element={<ProductPage/>}/>
                <Route path={'/form'} element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;