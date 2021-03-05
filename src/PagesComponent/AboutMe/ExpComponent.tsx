import {FC} from "react";
import style from "./AboutMe.module.scss"
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const ExpComponent: FC = () => {
    return (
        <div className={style.Experience}>
            <div className={style.resume_content}>
                <div className={style.column_left}>
                    <h2>Minsk Milk Plant No. 1</h2>
                    <p>November 2019 - January 2021</p>
                </div>

                <div className={style.column_middle}>
                    <TrendingUpIcon/>
                </div>

                <div className={style.column_right}>
                    <p>Organization and control of work, registration and management, control of a technological
                        process.</p>
                </div>
            </div>
            <div className={style.resume_content}>
                <div className={style.column_left}>
                    <h2>IT - Incubator</h2>
                    <p>March 2020 - Present</p>
                </div>

                <div className={style.column_middle}>
                    <TrendingUpIcon/>
                </div>

                <div className={style.column_right}>
                    <p>Using React with React-Redux, Redux, react-router-dom. Migrating project from JavaScript
                        to TypeScript. Use TDD with Unit Test. Debugging. API: Axios, Thunk, Redux-Thunk. Migration
                        Classes component to Functional with local storage (hooks), custom components development,
                        Flux & Redux architecture. Marking-up HTML single application with Preprocesses: Less and Sass.
                        Material UI.</p>
                </div>
            </div>
        </div>)
}


export default ExpComponent