import React, { useState } from 'react';
import ProductItem from "../ProductItem/ProductItem";


import styles from './ProductList.module.css';
import LinkGenerate from '../LinkGenerate/LinkGenerate';
import Header from '../Header/Header';
import UserBalance from '../UserBalance/UserBalance';

const products = [
    { id: '1', imgLink: "https://sun9-15.userapi.com/impg/22l2-L_4criKlQoYT4s5o1-_tZ9ZHnekn44s2w/rkQdTq3bfmM.jpg?size=166x123&quality=95&sign=9a677ec1d7ce8439e29be5ff7f381b0d&type=album", title: 'Худи с очень длинным названием', price: 5000, description: 'Синего цвета, прямые' },
    { id: '2', imgLink: "https://sun9-15.userapi.com/impg/22l2-L_4criKlQoYT4s5o1-_tZ9ZHnekn44s2w/rkQdTq3bfmM.jpg?size=166x123&quality=95&sign=9a677ec1d7ce8439e29be5ff7f381b0d&type=album", title: 'Пин Kreator', price: 12000, description: 'Зеленого цвета, теплая' },
    { id: '3', imgLink: "https://sun9-15.userapi.com/impg/22l2-L_4criKlQoYT4s5o1-_tZ9ZHnekn44s2w/rkQdTq3bfmM.jpg?size=166x123&quality=95&sign=9a677ec1d7ce8439e29be5ff7f381b0d&type=album", title: 'Промокод La Moda', price: 5000, description: 'Синего цвета, прямые' },
    { id: '4', imgLink: "https://sun9-15.userapi.com/impg/22l2-L_4criKlQoYT4s5o1-_tZ9ZHnekn44s2w/rkQdTq3bfmM.jpg?size=166x123&quality=95&sign=9a677ec1d7ce8439e29be5ff7f381b0d&type=album", title: 'Звонок с криэйтором', price: 122, description: 'Зеленого цвета, теплая' },
    { id: '5', imgLink: "https://sun9-15.userapi.com/impg/22l2-L_4criKlQoYT4s5o1-_tZ9ZHnekn44s2w/rkQdTq3bfmM.jpg?size=166x123&quality=95&sign=9a677ec1d7ce8439e29be5ff7f381b0d&type=album", title: 'Худи с очень длинным названием', price: 5000, description: 'Синего цвета, прямые' },
    { id: '6', imgLink: "https://sun9-15.userapi.com/impg/22l2-L_4criKlQoYT4s5o1-_tZ9ZHnekn44s2w/rkQdTq3bfmM.jpg?size=166x123&quality=95&sign=9a677ec1d7ce8439e29be5ff7f381b0d&type=album", title: 'Худи с очень длинным названием', price: 600, description: 'Зеленого цвета, теплая' },
    { id: '7', imgLink: "https://sun9-15.userapi.com/impg/22l2-L_4criKlQoYT4s5o1-_tZ9ZHnekn44s2w/rkQdTq3bfmM.jpg?size=166x123&quality=95&sign=9a677ec1d7ce8439e29be5ff7f381b0d&type=album", title: 'Худи с очень длинным названием', price: 5500, description: 'Синего цвета, прямые' },
    { id: '8', imgLink: "https://sun9-15.userapi.com/impg/22l2-L_4criKlQoYT4s5o1-_tZ9ZHnekn44s2w/rkQdTq3bfmM.jpg?size=166x123&quality=95&sign=9a677ec1d7ce8439e29be5ff7f381b0d&type=album", title: 'Худи с очень длинным названием', price: 12000, description: 'Зеленого цвета, теплая' },
]


const ProductList = ({items}) => {
 
    return (
        <React.Fragment>
            <Header />
            <LinkGenerate />
            <UserBalance />

            <div className={styles.list}>
                {items.map(item => (
                    <ProductItem
                        key={item.uuid}
                        product={item}
                        className={'item'}
                    />
                ))}
            </div>
        </React.Fragment>
    );
};

export default ProductList;