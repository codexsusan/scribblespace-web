import React from 'react'
import { Label1, Heading3, Body2 } from '../typography/Typography'
import { purple } from '../colors/colors'

function BlogCard() {
    return (
        <div className='flex items-center w-11/12 my-6 bg-slate-100 px-6 py-5 my-4'>
            <div className='w-60 h-60 border mr-10'>
                Image here
            </div>
            <div className='w-2/3'>
                <Label1 color={`text-[${purple}]`}>
                    STARTUP
                </Label1>
                <Heading3>
                    Design tips for designers that cover everything you need
                </Heading3>
                <Body2>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </Body2>
            </div>
        </div>
    )
}

export default BlogCard
