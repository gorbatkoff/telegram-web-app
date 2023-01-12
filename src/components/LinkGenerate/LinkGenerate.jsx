import React, {useState} from 'react';
import Button from '../Button/Button';

import styles from './LinkGenerate.module.css';

function LinkGenerate() {

    const [showLink, setShowLink] = useState(false);

    return (
        <div className={styles.generate}>
            {
                !showLink

                ?

                <Button onClick={() => setShowLink(true)}>Сгенерировать реферальную ссылку</Button>

                :

                <h2><a href="https://t.me/happy_subs">t.me/happy_subs</a></h2>
            }
        </div>
    )
}

export default LinkGenerate