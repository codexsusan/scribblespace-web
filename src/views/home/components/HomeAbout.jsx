import React from 'react'
import { Body1, Heading1, Heading2, Heading4 } from '../../../common/typography/Typography'

import { lavender } from '../../../common/colors/colors'

function HomeAbout() {
    return (
        <div className={`px-10`}>
            <div className={`bg-[${lavender}] w-full py-24 px-24 flex gap-10`}>
                <div className=' w-1/2 '>
                    <div className='tracking-wider font-semibold text-xl'>
                        ABOUT US
                    </div>
                    <div className='mt-16 pr-16'>
                        <Heading1 body="We are a community of content writers who share their learnings " />
                    </div>
                    <div className='my-6 text-2xl pr-10'>
                        <Body1 body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    </div>
                    <Heading4 color="text-blue-500" body="Read More &#8594;" />
                </div>
                <div className='tracking-wider font-semibold text-xl w-1/2'>
                    <div className='tracking-wider font-semibold text-xl'>
                        OUR MISSION
                    </div>
                    <div className='mt-16'>
                        <Heading2 body="Creating valuable content for creatives all around the world" />
                    </div>
                    <div className='mt-6'>
                        <Body1 body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
