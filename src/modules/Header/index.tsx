import IconButton from "@/atoms/icon-button";
import LogoAtom from "@/atoms/logo";
import TextButton from "@/atoms/text-button";
import RowGroup from "@/components/row-group";
import { useState } from "react";
import s from './styles.module.css';

export default function HeaderModule() {

    function MenuButton() {
        const [isMenu, setMenu] = useState(false);
        const handleMenu = () => {
            setMenu(!isMenu);
        }
        return(
            <button 
                className={s[isMenu ? 'menu-button-active' : 'menu-button']} 
                onClick={handleMenu}
            >
                <div className={s['menu-button-line-1']}/>
                <div className={s['menu-button-line-2']}/>
                <div className={s['menu-button-line-3']}/>
            </button>
        )
    }

    return (
        <div className={s['container']}>
            <RowGroup>
                <LogoAtom />
            </RowGroup>
            <RowGroup gap={20}>
                <TextButton text="О ЯКУТИИ" type="text" />
                <TextButton text="АГЕНСТВО" type="text" />
                <TextButton text="ИНВЕСТКЛИМАТ" type="text" />
                <TextButton text="ИНВЕСТСТАНДАРТ" type="text" />
                <TextButton text="ИНВЕСТОРУ" type="text" />
                <TextButton text="МЕДИА" type="text" />
            </RowGroup>
            <RowGroup gap={20}>
                <IconButton icon={"planet-white"}/>
                <IconButton icon={"glasses-white"}/>
                <MenuButton />
            </RowGroup>
        </div>
    )
}