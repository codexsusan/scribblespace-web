import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import { Body2, Body3, Display, Heading2, Heading3, Heading4, Heading5, Label1, Label2 } from '../../common/typography/Typography'
import Footer from '../../common/footer/Footer'

function BlogPost() {
    return (
        <div>
            <Navbar />
            <div className='px-10 mt-20 flex justify-center'>
                <div className='w-1/2  '>
                    <div className='flex w-full items-center'>
                        <div className='w-20 h-20 flex justify-center items-center bg-slate-100 rounded-[5rem]'>
                            <p>img</p>
                        </div>
                        <div className='px-5'>
                            <Label2 color={"text-blue-600"}> Susan Khadka</Label2>
                            <Body3 color={"text-gray-400"}> Posted on 27th January 2023</Body3>
                        </div>
                    </div>
                    <div className='w-11/12'>
                        <Heading2>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum cumque, dolor unde modi esse repellat placeat aliquid!
                        </Heading2>
                    </div>

                    <div className='bg-slate-50 border w-max px-4 py-2 rounded-lg'>
                        <Heading5> Startup</Heading5>
                    </div>

                    <div className='mt-10'>
                        <Body2>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut at molestias vero sed sapiente minima asperiores sequi culpa nihil consequatur dolorem distinctio sit inventore quidem tempora quasi amet corrupti incidunt quibusdam voluptas, fuga ab voluptatibus accusamus! Ducimus sit aliquid doloremque corrupti aliquam perferendis aperiam quo rerum sed, soluta porro architecto vitae cum harum distinctio culpa!
                            <br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dolores reiciendis beatae laudantium explicabo. Molestiae perspiciatis aperiam, voluptatem necessitatibus nostrum consectetur ipsum temporibus minima beatae eos velit ea repellendus praesentium fugiat labore at quibusdam fuga! Perferendis impedit aut debitis. Illo excepturi expedita nulla, quas quisquam consectetur nemo veritatis? Ipsum perspiciatis minus officia dicta cumque ipsa amet illum quidem natus, distinctio quae libero aut asperiores fugiat dolorum quia odit rerum, deserunt mollitia unde tenetur veniam labore? Repellat quidem minus, aliquid ea ab inventore reiciendis eum, doloremque laborum officiis sit obcaecati distinctio exercitationem tenetur nobis eveniet id rem vitae porro repudiandae voluptatem!
                        </Body2>
                    </div>
                    <div className='mt-10'>
                        <Body2>
                            Tags: Technology, Startup
                        </Body2>
                    </div>
                </div>
                <div className=''>
                    {/* TODO: What to read next */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPost
