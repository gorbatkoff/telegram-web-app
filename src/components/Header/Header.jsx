import React from 'react'
import Button from '../Button/Button';

import styles from './Header.module.css';

function Header() {

    const tg = window.Telegram.WebApp;


    const onClose = () => {
        tg.close()
    }

    return (
        <div className={styles.header}>
            <Button onClick={onClose}>Закрыть</Button>
            <span>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}

export default Header