import React from 'react';
import Button from '../Button/Button';

import styles from './ProductItem.module.css';

import PersonIcon from '../../images/PersonIcon.svg';
import Hot from '../../images/HotProduct.svg';
import { Link } from 'react-router-dom';


function ProductItem({ product, className, onAdd }) {

    const onAddHandler = () => {
        onAdd(product)
    }

    return (
        <Link to={`/products/782536182/${product.id}`}>

            <div className={styles.product + " " + className}>
                <div className={styles.img}>
                    <img src={product.imgLink} alt="" height="100%" width="100%" />
                    <img src={Hot} alt="" className={styles.hot} />
                </div>

                <div className={styles.title}>
                    {product.title}
                </div>

                <button className={styles['add-btn']}
                    onClick={onAddHandler}
                >
                    <div className={styles.price}>
                        <img src={PersonIcon} alt="" />
                        <span>{product.price}</span>
                    </div></button>
            </div>
        </Link>
    )
}

export default ProductItem