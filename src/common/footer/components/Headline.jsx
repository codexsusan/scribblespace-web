import React from 'react';
import { Heading3, Body2 } from '../../typography/Typography';

function Headline() {
    return (
        <div className='flex justify-between    '>
            <div>
                <Heading3 body={`Scribble Space`} />
            </div>
            <div className='flex items-center gap-10'>
                <div className='flex gap-10'>
                    <Body2 body={`Home`} />
                    <Body2 body={`Blog`} />
                    <Body2 body={`About Us`} />
                    <Body2 body={`Contact Us`} />
                    <Body2 body={`Privacy Policy`} />
                </div>
            </div>
        </div>
    )
}

export default Headline
