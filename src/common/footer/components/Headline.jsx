import React from 'react';
import { Heading3, Body2 } from '../../typography/Typography';

function Headline() {
    return (
        <div className='flex justify-between    '>
            <div>
                <Heading3 >
                    Scribble Space
                </Heading3>
            </div>
            <div className='flex items-center gap-10'>
                <div className='flex gap-10'>
                    <Body2>Home</Body2>
                    <Body2>Blog</Body2>
                    <Body2>About Us</Body2>
                    <Body2>Contact Us</Body2>
                    <Body2>Privacy Policy</Body2>
                </div>
            </div>
        </div>
    )
}

export default Headline
