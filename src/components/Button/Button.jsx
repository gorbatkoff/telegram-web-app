import React from 'react';

import styles from './Button.module.css';

function Button(props) {
    return (
        <button {...props} className={styles.button + " " + props.className}>
        </button>
    )
}

export default Button