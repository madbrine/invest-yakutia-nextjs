import { useEffect, useState } from 'react';
import s from './styles.module.css';

interface IProps {
    data: { text: string, link: string }[];
    current: number;
    handleCurrent: (key: number) => void
}

export default function Orbit({
    data,
    current,
    handleCurrent,
}: IProps) {
    const xDeg = 90 / data.length
    return (
        <div className={s['circle']}>
            {data.map((d, key) => (
                <div
                    key={key}
                    className={s['line']}
                    style={{
                        transform: `rotate(${key * xDeg - (xDeg - (xDeg - (current * xDeg)))}deg) translate(-125px, 0px)`,
                    }}
                >
                    <button onClick={() => handleCurrent(key)} className={s[current == key ? 'a-active' : 'a']}>
                        <p6 >{d.text}</p6>
                    </button>
                    <div className={s['ball']}
                        style={key === current ? { backgroundColor: '#FF1A1A' }:{}}
                    />
                </div>
            ))}
            <svg className={s['svg']} xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="0 0 100 80" fill="none">
                <path d="M100 30.0503L89.9824 20.0286L80.0393 10.1112L70.0291 0.0894799L59.9891 10.1112L54.984 15.1171L64.9917 25.1314L70.0266 20.1255L79.9448 30.0503L50.0137 59.9664L20.0427 30.0503L30.0902 20.0286L35.0928 25.0419L45.098 15.0202L30.0927 0L0 30.0503L10.0375 40.0621L39.9687 69.9882L50.0161 80L60.0239 69.9882L89.9849 40.0621L100 30.0503Z" fill="#F9F9F9" />
            </svg>
        </div>
    )
}