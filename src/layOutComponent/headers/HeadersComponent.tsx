import {FC} from "react";
import style from "./headerStyle.module.scss";


interface Props {
    label: string,
    type?: string
}

const HeadersComponent : FC <Props> = ({
                                           type, label
})  => {
    let typeofTitle = type && type === 'small' && style.TitleSmall
    return <h1 className={style.Title + ' ' + typeofTitle}>{label}</h1>
}
export default HeadersComponent