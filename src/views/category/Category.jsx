import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import BlogCard from '../../common/cards/BlogCard'
import Footer from '../../common/footer/Footer'

function Category() {
    return (
        <div className=''>
            <Navbar />
            <div className='w-full flex justify-center mt-16'>
                <div className='w-2/3 border p-10'>
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Category
