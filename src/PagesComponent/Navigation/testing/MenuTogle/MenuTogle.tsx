import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import s from './MenuToggle.module.scss';

type MenuToggleType = {
    onToggle: () => void
    isOpen: boolean
}


const MenuToggle = (props: MenuToggleType) => {
    const cls = [
        s.MenuToggle,

    ]

    const iconPar = [
        "fas"
    ]
    if (props.isOpen) {
        iconPar.push('fa-times')
        cls.push(s.open)
    } else {
        iconPar.push("fa-bars")
    }
    return (
        <div className={cls.join(' ')}>

            <FontAwesomeIcon icon={props.isOpen ? faTimes  : faBars} onClick={props.onToggle} />
        </div>
    )
}

export default MenuToggle