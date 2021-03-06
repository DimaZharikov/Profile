import {FC, useEffect} from "react";
import style from './Homestyle.module.scss'
import mainPhoto from "./../../immages/1.jpg"
import SplitText from "./SpliteText";
import TitleComponent from "../../layOutComponent/Title/TitleComponent";
import HeadersComponent from "../../layOutComponent/headers/HeadersComponent";
import wall from './../../immages/pexels-christina-morillo-1181271.jpg'


const HomePageComponent : FC  =() => {



    useEffect (() => {
        document.title = 'HOME'
    })
    return (<div className = {style.container} style = {{
        backgroundImage: `url(${wall})`,
        backgroundPosition: "center",
        height: '100vh',
        width: '100wh'
    }} >


        <div>
            <HeadersComponent label={'Welcome to my Page'}/>
        </div>
        <div className = {style.content}>
            <div className={style.mainInfo}>
                <h1 className={style.title}><TitleComponent label={'HI THERE!'}/></h1>
                <SplitText/>
                <h2>I can help you with a nice APP creation <br/>and <br/>develop a SPA</h2>
            </div>
            <div className = {style.imgWrapper}>
                <img src={mainPhoto} alt="there was profile photo"/>
            </div>

        </div>

    </div>)
}

export default HomePageComponent
