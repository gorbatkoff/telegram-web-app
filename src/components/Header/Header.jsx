import React from 'react'
import Button from '../Button/Button';

import styles from './Header.module.css';
import { useTelegram } from '../../hooks/useTelegram';

function Header() {

    const { user, onClose } = useTelegram();

    return (
        <div className={styles.header}>
            {/* <Button onClick={onClose}>Закрыть</Button> */}
            <span className={styles.username}>
                {user?.username}
            </span>
        </div>
    );
}

export default Header