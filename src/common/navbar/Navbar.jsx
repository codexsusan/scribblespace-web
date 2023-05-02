import React from 'react'
import { black, light } from '../colors/colors'
import { Body2, Heading3 } from '../typography/Typography'
import CustomButton from '../button/CustomButton'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();

    const routeSignin = (event) => {
        navigate('/login');
    };

    return (
        <div className={`bg-[${black}] text-[${light}] flex justify-between items-center py-5 px-10`}>
            <div>
                <Heading3 body={`Scribble Space`} />
            </div>
            <div className='flex items-center gap-10'>
                <div className='flex gap-10'>
                        <Body2 body={`Home`} />
                        <Body2 body={`Blog`} />
                        <Body2 body={`About Us`} />
                        <Body2 body={`Contact Us`} />
                </div>
                <CustomButton text="Sign In" handleClick={routeSignin} />
            </div>
        </div>
    )
}


