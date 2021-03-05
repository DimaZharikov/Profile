import {FC} from "react";
import style from "./AboutMe.module.scss"
import BookIcon from '@material-ui/icons/Book';

const EducationComponent: FC = () => {
    return (
        <div className={style.Experience}>
            <div className={style.resume_content}>
                <div className={style.column_left}>
                    <h2>Belarusian State Technical University</h2>
                    <p>September 2015 - February 2019</p>
                </div>

                <div className={style.column_middle}>
                    <BookIcon/>
                </div>

                <div className={style.column_right}>
                    <h2>Engineer - manager</h2>
                </div>
            </div>
            <div className={style.resume_content}>
                <div className={style.column_left}>
                    <h2>IT - Incubator</h2>
                    <p>March 2020 - September 2020</p>
                </div>

                <div className={style.column_middle}>
                    <BookIcon/>
                </div>

                <div className={style.column_right}>
                    <h2>Front-End React & Redux Developer</h2>
                </div>
            </div>
        </div>)
}


export default EducationComponent