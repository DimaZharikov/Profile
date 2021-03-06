import {FC, useState} from 'react';
import {HashRouter} from "react-router-dom";

import Routes from "./Routes/Routes";
import s from './App.module.scss'
import Header from "./PagesComponent/Navigation/testing/header/Header";
import HeaderBur from "./PagesComponent/Navigation/testing/headerBur/HeaderBur";
import MenuToggle from "./PagesComponent/Navigation/testing/MenuTogle/MenuTogle";


const App: FC   = ({

                                    }) => {

    const [menu, setMenu] = useState(false)
    const toggleMenuHandler = () => {
        setMenu(!menu)
    }
    const menuCloseHandler = () => {
        setMenu(false)
    }

    return (
        <div   className={`${s.Layout}}`}>


            <HashRouter>

                <HeaderBur isOpen={menu}
                           onClose={menuCloseHandler}/>
                <MenuToggle
                    onToggle={toggleMenuHandler}
                    isOpen={menu}
                />

                <Routes/>
            </HashRouter>
        </div>
    );
}












export default App;
