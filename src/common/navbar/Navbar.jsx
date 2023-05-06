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

    const routeHome = () => {
        navigate('/home');
    }

    const routeBlog = () => {
        navigate("/blog");
    }

    const routeAbout = () => { }

    const routeContactUs = () => {

    }

    return (
        <div className={`bg-[${black}] text-[${light}] flex justify-between items-center py-5 px-10`}>
            <div onClick={routeHome} className='cursor-pointer'>
                <Heading3 >Scribble Space</Heading3>
            </div>
            <div className='flex items-center gap-10'>
                <div className='flex gap-10'>
                    <div className='cursor-pointer' onClick={routeHome}>
                        <Body2 >Home</Body2>
                    </div>
                    <div className='cursor-pointer' onClick={routeBlog}>
                        <Body2>Blog</Body2>
                    </div>
                    <div className='cursor-pointer' onClick={routeAbout}>
                        <Body2>About Us</Body2>
                    </div>
                    <div className='cursor-pointer' onClick={routeContactUs}>
                        <Body2>Contact Us</Body2>
                    </div>
                </div>
                <CustomButton text="Sign In" handleClick={routeSignin} />
            </div>
        </div>
    )
}


