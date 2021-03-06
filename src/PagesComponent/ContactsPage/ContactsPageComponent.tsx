import {FC, useEffect} from "react";
import HeadersComponent from "../../layOutComponent/headers/HeadersComponent";
import SocialComponent from "./SocialeComponent";
import SendFormComponent from "./sendDirectory/SendForm";
import style from "./contactStyle.module.scss"

const ContactsPageComponent : FC = () => {

    useEffect (()=>{
        document.title = 'Contacts'

    })

    return (<div className = {style.container}>
        <HeadersComponent label={"Contacts"}  />
        <div className={style.sendingContent}>
            <SendFormComponent title = {'Send me Message from that Page'}/>

        </div>
        <footer className={style.footerContainer}>
            <SocialComponent/>
        </footer>

    </div>)
}

export default ContactsPageComponent