import s from './styles.module.css';

interface IProps {
    text: string;
    link?: string;
    type: 'text' | 'contained' | 'outlined'
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function TextButton({
    text,
    link,
    type,
    onClick
}: IProps) {

    //Выполняет функцию при нажатии как и обычная кнопка
    const Event = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('event')
        if (onClick) onClick(event);
    }

    //Испльзую именно <a></a> для лучшего SEO
    return (
        <button
            style={{display: 'flex'}}
            onClick={event => Event(event)}
            className={type === 'text' ? s[type] : ''}
        >
            <p5 
                className={s[type]}
                href={link ? link : ''}
            >
                {text}
            </p5>
        </button>
    )
}