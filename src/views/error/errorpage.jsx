import React from 'react'
import Navbar from '../../common/navbar/Navbar'

function Errorpage() {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className="text-black justify-center h-5/6 flex flex-col">
                <div className='text-4xl font-semibold text-center mb-5'>Oops!</div>
                <div className='text-center text-lg'>Sorry, an unexpected error occurred.</div>
                <div className='text-center text-lg'>The page you are looking for is not found</div>
            </div>
        </div>
    )
}

export default Errorpage
