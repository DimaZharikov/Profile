
import {FC, useState} from "react";
import Modal from "../../../layOutComponent/Modal/Modal";
import style  from "./../contactStyle.module.scss"



interface Props {
    title: string,

}

const SendFormComponent: FC<Props> = ({
                                        title
                                    }) => {

    const [isOpen, setIsOpen] = useState <boolean> (false)
    const onShowModal = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className = {style.mainButton}>
            <h3 role = "button" onClick={onShowModal}>Send Message From that Page

            </h3>

            <Modal modal={isOpen} setModal={setIsOpen}/>
        </div>
       )
}

export default SendFormComponent