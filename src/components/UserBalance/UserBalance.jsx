import React from 'react';

import styles from './UserBalance.module.css';

import PersonIcon from '../../images/PersonIcon.svg';

function UserBalance() {
    return (
        <div className={styles.userBalance}>
            <div>Ваш счёт</div>

            <div className={styles.pointsIcon}>
                <img src={PersonIcon} alt="" height="25"/>
            </div>

            <div>
                10
            </div>
        </div>
    )
}

export default UserBalance