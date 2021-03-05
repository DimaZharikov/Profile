import {FC} from "react";
import HeadersComponent from "../../layOutComponent/headers/HeadersComponent";
import style from "./folioStyle.module.scss"
import BlockOfProject from "./BlocksOfProject";
import {PortfolioData} from "./PortfolioData";
import SimpleAccordion from "../../layOutComponent/accordion/Acordion";


const PortfolioPageComponent: FC = () => {
    return (<div className={style.container}>

        <HeadersComponent label={"Portfolio"}/>


        <div className = {style.content}>
            {PortfolioData.map((item, index) => {
                return (<div key={index}>
                    <SimpleAccordion title={item.title}
                                     description={item.description}
                                     urlCode={item.urlCode}
                                     urlWatch={item.urlWatch}
                                     src={item.img}/>
                </div>)
            })}
        </div>
    </div>)
}

export default PortfolioPageComponent