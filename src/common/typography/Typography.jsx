import React, { Children } from 'react'

export function Label1(props) {

    const color = props.color ?? '';
    return (
        <div className={`flex text-[16px] fw-medium ${color} tracking-widest`}>
            {
                Children.toArray(props.children)
            }
        </div>
    )
}

export function Label2(props) {
    const color = props.color ?? '';
    return (
        <div className={`flex text-[18px] fw-medium ${color} tracking-widest`}>
            {Children.toArray(props.children)}
        </div>
    );
}

export function Body1(props) {
    return (
        <div className='flex text-2xl font-normal'>
            {Children.toArray(props.children)}
        </div>
    )
}

export function Body2(props) {
    const color = props.color ?? '';
    const className = props.className ?? '';
    return (
        <div className={`flex my-1 text-xl ${className} ${color} font-normal`}>
            {Children.toArray(props.children)}
        </div>
    )
}

export function Body3(props) {
    const color = props.color ?? '';
    return (
        <div className={`flex text-[14px] ${color} font-normal`}>
            {Children.toArray(props.children)}
        </div>
    )
}

export function Display(props) {
    const color = props.color ?? '';
    return (
        <div className={`flex text-[56px] font-normal ${color}`}>
            {Children.toArray(props.children)}
        </div>
    )
}

export function Heading1(props) {
    const color = props.color ?? '';
    return (
        <div className={`flex text-[48px] font-bold  leading-[4rem] ${color}`}>
            {Children.toArray(props.children)}
        </div>
    )
}

export function Heading2(props) {
    const color = props.color ?? '';
    return (
        <div className={`flex my-3 text-[36px] font-bold leading-[3rem] ${color}`}>
            {Children.toArray(props.children)}
        </div>
    )
}

export function Heading3(props) {
    const color = props.color ?? '';
    return (
        <div className={`flex my-3 ${color} text-[28px] fw-medium`}>
            {Children.toArray(props.children)}
        </div>
    )
}

export function Heading4(props) {
    const color = props.color ?? '';
    return (
        <div className={`flex ${color} text-[24px] fw-medium`}>
            {Children.toArray(props.children)}
        </div>
    )
}

export function Heading5(props) {
    return (
        <div className='flex text-[20px] fw-medium'>
            {Children.toArray(props.children)}
        </div>
    )
}

export function Heading6(props) {
    return (
        <div className='flex text-[16px] fw-medium'>
            {Children.toArray(props.children)}
        </div>
    )
}


