import React from 'react'
import {
    yellow,
    darkyellow,
    black
} from "../colors/colors"

function CustomButton(props) {
    const { type, text } = props;
    return (
        <div>
            <button
                onClick={(event)=>{props.handleClick(event)}}
                type={type}
                className={`px-5 py-4 fw-regular text-xl text-[${black}] bg-[${yellow}] hover:bg-[${darkyellow}]`}>
                {text}
            </button>
        </div>
    )
}

export default CustomButton
