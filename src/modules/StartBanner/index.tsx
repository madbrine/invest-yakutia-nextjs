import TextButton from '@/atoms/text-button';
import Orbit from '@/components/orbit';
import { useEffect, useState } from 'react';
import s from './styles.module.css';

export default function StartBannerModule() {

    //хотел использовать Framer Motion но, с новой Next 13 она не работает.
    //Решил анимации своими руками сделать

    const orbitData = [
        { text: 'Подать заявку', link: "/", header: 'Подать заявку', buttonText: 'Подать заявку' },
        { text: 'Инвесткарта', link: "/", header: 'Инвесткарта', buttonText: 'Подать заявку' },
        { text: 'Инвестплощадки', link: "/", header: 'Якутия-Территория инвестиций', buttonText: 'Подать заявку' },
        { text: 'Меры поддержки', link: "/", header: 'Меры поддержки', buttonText: 'Подать заявку' },
        { text: 'Задать вопрос', link: "/", header: 'Задать вопрос', buttonText: 'Подать заявку' },
    ]
    const [current, setCurrent] = useState(Math.floor(orbitData.length / 2))
    const [headerKey, setHeaderKey] = useState(current);
    const handleCurrent = (key: number) => {
        setCurrent(key)

        setTimeout(() => {
            setHeaderKey(key);
        }, 250);
    }

    return (
        <div className={s['container']}>
            <div className={s['box']}>
                <div className={s[current == headerKey ? 'header-tik' : 'header-tak']}>
                    <div className={s['text-box']}>
                        <h1 >
                            {orbitData[headerKey].header}
                        </h1>
                    </div>
                    <TextButton text="Подать заявку" type="contained" />
                </div>
            </div>
            <Orbit
                current={current}
                handleCurrent={handleCurrent}
                data={orbitData}
            />
        </div>
    )
}