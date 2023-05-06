import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import { Heading1, Heading2 } from '../../common/typography/Typography'
import BlogCard from '../../common/cards/BlogCard'
import Footer from '../../common/footer/Footer';

function Author() {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center mt-10'>
                <div className='w-2/3 p-10 border'>
                    <Heading2>
                        My Posts
                    </Heading2>
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Author
