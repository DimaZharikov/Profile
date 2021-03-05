
import {FC} from "react";
import style from "./titleStyle.module.scss"


interface Props {
    label: string;
    type?: string
};
const TitleComponent: FC<Props> = ({ label, type }) => {
    let typeofTitle = type && type === 'small' && style.TitleSmall
    return <h1 className={style.Title + ' ' + typeofTitle}>{label}</h1>;
};

export default TitleComponent