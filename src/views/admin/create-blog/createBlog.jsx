import React from 'react'
import Navbar from '../../../common/navbar/Navbar'
import AdminNavbar from '../components/AdminNavbar';
import { Heading2 } from '../../../common/typography/Typography';
import CustomButton from '../../../common/button/CustomButton';

function CreateBlog() {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='flex h-full'>
                <AdminNavbar />
                <div className='w-full'>
                    <div
                        className='mx-10 my-6 items-center w-5/6 flex justify-between'
                    >
                        <div>
                            <Heading2>
                                Write a blog
                            </Heading2>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog
