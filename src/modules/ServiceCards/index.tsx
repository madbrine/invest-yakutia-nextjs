import { useState } from 'react';
import s from './styles.module.css';

export default function ServiceCardsModule() {

    const [isNumber, setNumber] = useState(0);

    return (
        <div className={s['container']}>
            <button>
                <h2>
                    ИНВЕСТСТАНДАРТ
                </h2>
            </button>
            <div>

            </div>
        </div>
    )
}