import {FC} from "react";
import HeadersComponent from "../../layOutComponent/headers/HeadersComponent";
import style from "./skilsStyle.module.scss"
import imgSkills from './../../immages/dea978101522963.5f20b1d2d10c0.png'
import {SkillData} from "./SkillsData";
import BlocksComponent from "./Blocks/BlocksComponent";


const SkillsPageComponent : FC = () => {
    return ( <div className = {style.container} style = {{
        backgroundImage: `url(${imgSkills})`,
        backgroundPosition: "center",
        backgroundPositionY: "revert",
        height: '100vh',
        width: '100wh',
        overflowY   : "hidden",
        backgroundRepeat: "no-repeat"
    }} >

        <HeadersComponent label={'Skills'}/>
        <div className={style.content}>
            <div className={style.skillsContent}>
                {SkillData.map((item,index) => {
                    return (<div key = {index}>
                        <BlocksComponent title={item.title} images={item.images} description={item.description}/>
                    </div>)
                })}
            </div>
        </div>



    </div>)
}

export default SkillsPageComponent