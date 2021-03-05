import React, {FC} from 'react';
import ReactTypingEffect, {ReactTypingEffectProps} from 'react-typing-effect';
import style from "./Homestyle.module.scss"

interface Props {

}

const SplitText: FC<Props > = ({

                              }) => {
    return (<>
        <h1>

            <ReactTypingEffect
                className = {style.splitText}
                text={["My name is Dmitry Zharikov", `I'm FRONT-END REACT DEVELOPER`]}
                cursor = "|"
            />
        </h1>
    </>)
}

export default SplitText
