import {FC} from "react";
import HeadersComponent from "../../layOutComponent/headers/HeadersComponent";
import style from "./AboutMe.module.scss"
import TitleComponent from "../../layOutComponent/Title/TitleComponent";
import EducationComponent from "./EducationComponent";
import ExpComponent from "./ExpComponent";




const AboutMeComponent: FC = () => {
    return (
        <div className={style.container} >
            <HeadersComponent label={'About Me'}/>

            <div className={style.textMe}>
                <p>Responsible and motivated Front-End Dev. with experience creating SPA using technologies.
                    Work well as part of a team. Enthusiastic, able to meet deadlines. Welcome new challenges.
                    I’d like to gain new experience, professional training and development.
                </p>
            </div>
            <div>
                <TitleComponent label={'Education'}/>
            </div>
            <div>
                <EducationComponent/>
            </div>
            <div>
                <TitleComponent label={'Work Experience'}/>
            </div>
            <div>
                <ExpComponent/>
            </div>

        </div>)
}


export default AboutMeComponent