import React, {FC} from 'react';
import style from './Modal.module.scss'
import {Button, TextField} from "@material-ui/core";


interface ModalType {
    modal: boolean
    setModal: (value: boolean) => void
}


const Modal: FC<ModalType> = ({modal, setModal, children}) => {
    const finalModalClassName = `${style.modal} ${modal ? style.active : ""}`;
    const finalModalContentClassName = `${style.modal_content} ${modal ? style.active : ""}`;
    return (
        <div className={finalModalClassName} onClick={() => setModal(false)}>
            <div className={finalModalContentClassName} onClick={e => e.stopPropagation()}>
                <form action="send_messages">
                    <TextField id="outlined-basic" label="Name" variant="outlined" margin="normal" />
                    <TextField id="outlined-basic" label="Reason" variant="outlined" />
                    <TextField
                        id="standard-multiline-static"
                        label="Message"
                        multiline
                        rows={5}
                        className = {style.TextField}



                    />
                    <Button className={style.btn} >submit</Button>

                </form>


            </div>
        </div>
    );
};

export default Modal;