import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import { Body2, Heading1, Heading3, Label1 } from '../../common/typography/Typography'
import BlogCard from '../../common/cards/BlogCard'
import Footer from '../../common/footer/Footer'

function Blog() {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center mt-10'>
                <div className='w-2/3'>
                <Heading1>All Posts</Heading1>
                <div className='mt-2 border-2'>
                </div>
                <div className='flex-col'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                </div>
            </div>
            <div className='px-10 mt-6'>
                
            </div>
            <Footer />
        </div>
    )
}

export default Blog
