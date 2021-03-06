import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './headerStyle.module.scss'
import {NavigationData} from "../../NavigationData";


const Header = () => {

    const mappedNavigationData =  NavigationData.map ((item, index) => {
        return (<li key = {index}>
            <NavLink to = {item.path} activeClassName={style.active}>
                {item.title}
            </NavLink>
        </li>)
    })

    return (

        <div className={style.Header}>
            <div className={style.container}>
                <div className={style.Navbar}>
                    <ul>
                        {
                            mappedNavigationData
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;