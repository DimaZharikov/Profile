import {FC} from "react";
import style from './contactStyle.module.scss'

const SocialComponent: FC = () => {

    const sendMeFromGmail = "https://mail.google.com/mail/u/0/?fs=1&to=Dima.Zharikov@gmail.com&su=jobs&body=&bcc=dima.zharikov@gmail.com&tf=cm#"


    return (<div className={style.footerContent}>
        <div className={style.numberContent}>
            <div>
                <img src="https://img.icons8.com/nolan/50/apple-phone.png" alt='phone'/>
                <img src="https://img.icons8.com/nolan/50/viber.png" alt="viber"/>
                <img src="https://img.icons8.com/nolan/50/telegram-app.png" alt='telegram'/>

            </div>
            <div>
                <p>+375(29) 745-48-30</p>
            </div>
        </div>
        <div className={style.socImg}>
            <a href="https://www.linkedin.com/in/dmitry-zharikov-ba636b200/">
                <img src="https://img.icons8.com/nolan/50/linkedin.png"/>
            </a>
            <a href="https://vk.com/zharikov_d_n">
                <img src="https://img.icons8.com/nolan/50/vk-circled.png"/>
            </a>
            <a href={sendMeFromGmail}>
                <img src="https://img.icons8.com/color/50/000000/gmail--v2.png"/> </a>
        </div>


    </div>)
}

export default SocialComponent

