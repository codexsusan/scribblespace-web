import React from 'react'
import { black, yellow, darkgrey, darkyellow } from '../colors/colors'
import { Heading2, Heading4 } from '../typography/Typography'
import Headline from './components/Headline'

function Footer() {
    return (
        <div className={`bg-[${black}] text-white py-10 px-10`}>
            <Headline />
            <div className='flex bg-white mt-16 px-16 py-14 mb-10 bg-opacity-5 items-center'>
                <div className='w-1/2'>
                    <Heading2 body={`Subscribe to our news letter to get latest updates and news`} />
                </div>
                <div className='flex w-1/2 justify-center items-center gap-x-2'>
                    <input placeholder='Enter Your Email' className={`px-4 w-2/3 py-4 bg-[${black}] border border-[${darkgrey}]`} type="email" name="" id="" />
                    <div>
                        <button
                            type={"submit"}
                            className={`px-5 py-4 fw-regular text-[${black}] bg-[${yellow}] hover:bg-[${darkyellow}]`}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <div>
                    <div>
                        Biratnagar, Nepal
                    </div>
                    <div>
                        susankhadka708@gmail.com | 9811050568
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
