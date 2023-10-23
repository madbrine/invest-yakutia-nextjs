import s from './styles.module.css';

interface IProps {
    data: {number: number, header: string, desc: string}
}
export default function InfogtaphicCard({
    data
}: IProps) {
    return (
        <div className={s['container']}>
            <h3>1</h3>
            <h6>Место</h6>
            <p4>
                Лидер по ВРП по
                Дальнему Востоку
            </p4>
        </div>
    )
}