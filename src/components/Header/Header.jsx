import React from 'react'
import Button from '../Button/Button';

import styles from './Header.module.css';
import { useTelegram } from '../../hooks/useTelegram';

function Header() {

    const { user, onClose } = useTelegram();

    return (
        <div className={styles.header}>
            <h3><b>The Edinorog</b></h3>

            <Button>Сменить</Button>
        </div>
    );
}

export default Header