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
        <div className='flex text-2xl font-normal'>
            {props.body}
        </div>
    )
}

export function Body2(props) {
    return (
        <div className='flex text-xl font-normal'>
            {props.body}
        </div>
    )
}

export function Display(props) {
    return (
        <div className='flex text-[56px] font-normal'>
            {
                props.body
            }
        </div>
    )
}

export function Heading1(props) {
    return (
        <div className='flex text-[48px] font-bold  leading-[4rem]'>
            {props.body}
        </div>
    )
}

export function Heading2(props) {
    return (
        <div className='flex text-[36px] font-bold leading-[3rem]'>
            {props.body}
        </div>
    )
}

export function Heading3(props) {
    const color = props.color ?? '';
    return (
        <div className={`flex ${color} text-[28px] fw-medium`}>
            {props.body}
        </div>
    )
}

export function Heading4(props) {
    const color = props.color ?? '';
    return (
        <div className={`flex ${color} text-[24px] fw-medium`}>
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


