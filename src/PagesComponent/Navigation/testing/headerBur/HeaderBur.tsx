import React from "react";
import { NavLink } from "react-router-dom";


import s from './HeaderBur.module.scss'
import {NavigationData} from "../../NavigationData";

import BackDrop from "../backDrop/BackDrop";


function HeaderBur(props:any) {
    const cls = [
        s.Header
    ]

    if (!props.isOpen){
        cls.push(s.close)
    }
    const clickHandler = () => {
        props.onClose()
    }

    const mappedNavigationData =  NavigationData.map ((item, index) => {
        return (
            <NavLink to = {item.path}
                     activeClassName={s.active}
                    onClick = {clickHandler}
                     key = {index}
            >
                {item.title}
            </NavLink>
        )
    })
    return (
        <React.Fragment>
            <nav className={cls.join(' ')}>
                <div className={s.wrapper}>
                    {
                        mappedNavigationData
                    }
                </div>
            </nav>
            {props.isOpen ? <BackDrop onClick={props.onClose}/> : null}
        </React.Fragment>
    );
}

export default HeaderBur;