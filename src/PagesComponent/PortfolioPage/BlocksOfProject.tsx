import React, {FC} from "react";
import style from "./folioStyle.module.scss"


interface Props {
    title?: string,
    description: string,
    urlWatch: string,
    urlCode: string,
    src?: any
}


const BlockOfProject: FC<Props> = ({
                                       title,
                                       description,
                                       urlWatch,
                                       urlCode,
                                       src
                                   }) => {


    return (<div className={style.projectBlock}>
        <div className={style.inContent}>
            <div>
                <img src={src} alt="immages project"/>
            </div>

            <div>
                {description}
                <div>
                    <button className={style.btn}>
                        <a href={urlWatch}>Watch</a>
                    </button>
                    <button className={style.btn}>
                        <a href={urlCode}>Code</a>
                    </button>
                </div>
            </div>
        </div>
        <span>{title}</span>




    </div>)
}

export default BlockOfProject








