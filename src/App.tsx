import {FC, useState} from 'react';
import {HashRouter} from "react-router-dom";

import Routes from "./Routes/Routes";
import style from './App.module.scss'
import Navigation from "./PagesComponent/Navigation/Navigation";



const App: FC   = ({

                                    }) => {



    return (
        <div className={style.mainStyle}>


            <HashRouter>
                <div className={style.navBar}>
                    <Navigation/>
                </div>

                <Routes/>
            </HashRouter>
        </div>
    );
}












export default App;
