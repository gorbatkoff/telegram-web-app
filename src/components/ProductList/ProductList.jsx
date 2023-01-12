import React, {useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";

import styles from './ProductList.module.css';

const products = [
    {id: '1', imgLink: "https://kosmo-shop.com/25192/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg", title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', imgLink: "https://kosmo-shop.com/25192/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg", title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', imgLink: "https://kosmo-shop.com/25192/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg", title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', imgLink: "https://kosmo-shop.com/25192/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg", title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '5', imgLink: "https://kosmo-shop.com/25192/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg", title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
    {id: '6', imgLink: "https://kosmo-shop.com/25192/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg", title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '7', imgLink: "https://kosmo-shop.com/25192/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg", title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
    {id: '8', imgLink: "https://kosmo-shop.com/25192/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg", title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId: tg.initDataUnsafe?.query_id,
        }
        fetch('http://62.217.180.68:8000/web-data', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])


    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={styles.list}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;