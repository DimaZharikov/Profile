import {FC} from "react";
import style from "./blocksStyle.module.scss"

interface Props {
    images : string,
    title: string,
    description : string
}

const BlocksComponent  : FC < Props > = ({
    images, title,description
                                         }) => {
    return (<div className={style.container}>
        <span><img src={images} alt='images skills'/></span>
        <span><h2>{title}</h2></span>
        <span><p>{description}</p></span>
    </div>)
}

export default BlocksComponent