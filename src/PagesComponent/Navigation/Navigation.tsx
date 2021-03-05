import {useState} from "react";
import {NavigationData} from "./NavigationData";
import {NavLink} from 'react-router-dom'
import style from './navigation.module.scss'



const Navigation = () => {

    const [isOpen, setIsOpen] = useState <boolean>(true)

    const onShowMenu = () => {setIsOpen(!isOpen)}
    return (<div>
        <button onClick={onShowMenu}>open</button>
        <div className={style.MenuToggle}>
            {
                isOpen && NavigationData.map ((item) => {
                    return (<div  className={style.content}>
                        <NavLink to = {item.path} className = {style.link}>
                            {item.title}
                        </NavLink>
                    </div>)
                })
            }
        </div>

    </div>)
}

export default Navigation