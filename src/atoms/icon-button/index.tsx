import s from './styles.module.css';


interface IProps {
    icon: string;
    link?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function IconButton({
    icon,
    link,
    onClick
}: IProps) {

    //Выполняет функцию при нажатии как и обычная кнопка
    const Event = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(event);
    }

    //Испльзую именно <a></a> для лучшего SEO
    return (
        <button
            onClick={event => Event(event)}
        >
            <a href={link ? link : ''}>
                <img src={"/" + icon + ".svg"}></img>
            </a>
        </button>
    )
}