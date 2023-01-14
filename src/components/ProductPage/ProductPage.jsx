import React from 'react'
import { Link, useParams } from 'react-router-dom'
import StepperComponent from '../Stepper/StepperComponent';
import UserBalance from '../UserBalance/UserBalance';

import Hot from '../../images/HotProduct.svg';
import PersonIcon from '../../images/PersonIcon.svg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import styles from './ProductPage.module.css'
import Button from '../Button/Button';

function ProductPage() {

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


    let channel = useParams().channel;
    let id = useParams().id - 1;

    return (
        <div>

            <div className={styles['product-header']}>
                <Link to="/">
                    <ArrowBackIosIcon color="#3e7dfa" />
                </Link>

                <UserBalance />
            </div>


            <div className={styles.product}>
                <div className={styles.img}>
                    <img src={products[id].imgLink} alt="" height="100%" width="100%" />
                    <img src={Hot} alt="" className={styles.hot} />
                </div>

                <div className={styles.title}>
                    {products[id].title}
                </div>

                <div className={styles.price}>
                    <div className={styles.pointsIcon}>
                        <img src={PersonIcon} alt="" height="15" />
                    </div>
                    <span>{products[id].price.toLocaleString()}</span>
                </div>

                {/* <button className={styles['add-btn']}
                    onClick={onAddHandler}
                >
                    </button> */}
            </div>

            <StepperComponent />
        </div>
    )
}

export default ProductPage