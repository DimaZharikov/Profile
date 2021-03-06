import React from 'react';
import s from './BackDrop.module.scss';



const BackDrop = (props:any) => {
    return (
        <div className={s.BackDrop} onClick={props.onClick}/>
    )
}


export default BackDrop;