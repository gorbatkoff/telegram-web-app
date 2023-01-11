import React, { useState, useCallback, useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem';

import styles from './ProductList.module.css';
import { useTelegram } from '../../hooks/useTelegram';

const products = [
    { id: '1', title: 'Худи с очень длинным названием', price: 1000, description: 'Худи' },
    { id: '2', title: 'Пин Kreator', price: 1000, description: 'Пин' },
    { id: '3', title: 'Промокод La Moda', price: 0, description: 'Промокод' },
    { id: '4', title: 'Звонок с криэйтором', price: 1000, description: 'Звонок' },
    { id: '5', title: 'Худи с очень длинным названием', price: 1000, description: 'Худи' },
    { id: '6', title: 'Худи с очень длинным названием', price: 1000, description: 'Худи ' },
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(async () => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        await fetch('http://62.217.180.68:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
        <div>
            <div className={styles.generate}>
                Сгенерировать реферальную ссылку
            </div>

            <div className={styles.balance}>
                Ваш счёт: 10
            </div>

            <div className={styles.list}>
                {products.map(product => (
                    <ProductItem
                        product={product}
                        onAdd={onAdd}
                        className={styles.item}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList