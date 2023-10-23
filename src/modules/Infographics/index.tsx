import InfogtaphicCard from '@/components/infographic-card';
import s from './styles.module.css';

export default function InfographicsModule() {
    const datas = [
        { number: 1, header: "Место", desc: "Лидер по ВРП по Дальнему Востоку" },
        { number: 1, header: "Место", desc: "Лидер по ВРП по Дальнему Востоку" },
        { number: 1, header: "Место", desc: "Лидер по ВРП по Дальнему Востоку" },
        { number: 1, header: "Место", desc: "Лидер по ВРП по Дальнему Востоку" },
        { number: 1, header: "Место", desc: "Лидер по ВРП по Дальнему Востоку" },
        { number: 1, header: "Место", desc: "Лидер по ВРП по Дальнему Востоку" },
    ]

    return (
        <div className={s['container']}>
            <h4>ИНВЕСТ СТАНДАРТ</h4>
            <div className={s['info-cards']}>
                {datas.map((data, key) => (
                        <InfogtaphicCard data={data} key={key}/>
                ))}
            </div>
        </div>
    )
}