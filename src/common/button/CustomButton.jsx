import React from 'react'
import {
    yellow,
    darkyellow,
    black
} from "../colors/colors"

function CustomButton(props) {
    const { type, text, customClass } = props;

    return (
        <div className='cursor-pointer'>
            <button
                onClick={(event)=>{props.handleClick(event)}}
                type={type}
                className={`px-5 p-2 ${customClass} rounded fw-regular text-xl text-[${black}] bg-[${yellow}] hover:bg-[${darkyellow}]`}>
                {text}
            </button>
        </div>
    )
}

export default CustomButton
