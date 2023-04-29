import React from 'react'

export function Label(props) {
    return (
        <div className='flex text-[14px] fw-medium'>
            {props.body}
        </div>
    )
}
export function Body1(props) {
    return (
        <div className='flex text-[14px] fw-regular'>
            {props.body}
        </div>
    )
}

export function Body2(props) {
    return (
        <div className='flex text-[16px] fw-regular'>
            {props.body}
        </div>
    )
}

export function Display(props) {
    return (
        <div className='flex text-[56px] fw-bold'>
            {
                props.body
            }
        </div>
    )
}

export function Heading1(props) {
    return (
        <div className='flex text-[48px] fw-bold'>
            {props.body}
        </div>
    )
}

export function Heading2(props) {
    return (
        <div className='flex text-[36px] fw-bold'>
            {props.body}
        </div>
    )
}

export function Heading3(props) {
    return (
        <div className='flex text-[28px] fw-bold'>
            {props.body}
        </div>
    )
}

export function Heading4(props) {
    return (
        <div className='flex text-[24px] fw-medium'>
            {props.body}
        </div>
    )
}

export function Heading5(props) {
    return (
        <div className='flex text-[20px] fw-medium'>
            {props.body}
        </div>
    )
}

export function Heading6(props) {
    return (
        <div className='flex text-[16px] fw-medium'>
            {props.body}
        </div>
    )
}


