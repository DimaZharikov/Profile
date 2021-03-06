import {useState} from "react";
import {NavigationData} from "./NavigationData";
import {NavLink} from 'react-router-dom'
import style from './navigation.module.scss'



const Navigation = () => {

    const [isOpen, setIsOpen] = useState <boolean>(true)

    const onShowMenu = () => {setIsOpen(!isOpen)}

    const mappedNavigationData =  NavigationData.map ((item, index) => {
        return (<div  className={style.content} key = {index}>
            <NavLink to = {item.path} className = {style.link}>
                {item.title}
            </NavLink>
        </div>)
    })

    return (<div>
        {
            !isOpen &&  <button onClick={onShowMenu} >open</button>
        }

        <div className={style.MenuToggle}>
            {
                isOpen && mappedNavigationData
            }
        </div>

    </div>)
}

export default Navigation