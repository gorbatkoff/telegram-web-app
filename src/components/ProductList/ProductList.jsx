import React, { useState } from 'react';
import ProductItem from "../ProductItem/ProductItem";


import styles from './ProductList.module.css';
import LinkGenerate from '../LinkGenerate/LinkGenerate';
import Header from '../Header/Header';
import UserBalance from '../UserBalance/UserBalance';

const ProductList = ({items}) => {
 
    return (
        <React.Fragment>
            <Header />
            <LinkGenerate />
            <UserBalance />

            <div className={styles.list}>
                {items && (
                    <div>
                        {items.map(item => (
                            <ProductItem
                                key={item.uuid}
                                product={item}
                                className={'item'}
                            />
                        ))}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default ProductList;