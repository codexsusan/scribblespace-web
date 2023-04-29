import React from 'react'
import {
    yellow,
    darkyellow
} from "../colors/colors"

function CustomButton(props) {
    const { type, buttonText } = props;
    return (
        <div>
            <button type={type} className={`px-5 py-2 fw-regular  bg-[${yellow}] hover:bg-[${darkyellow}]`}>
                {props.buttonText}
            </button>
        </div>
    )
}

export default CustomButton
