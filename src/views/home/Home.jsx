import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import { Body1, Body2, Heading2, Heading3, Heading4, Label } from '../../common/typography/Typography'
import CustomButton from '../../common/button/CustomButton'
import { darkgrey, darkyellow, lavender, purple } from '../../common/colors/colors';
import { Heading1 } from '../../common/typography/Typography';
import HomeAbout from './components/HomeAbout';

function Home() {

  const FeaturePost = (
    <div className=' px-10 pt-5'>
      <div className='font-bold'>
        Image Here
      </div>
      <div className='mt-5 '>
        By John Doe | May 23, 2022
      </div>
      <div className='my-5 '>
        <Heading2 body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`} />
      </div>
      <div className='my-5 '>
        <Body2 body={`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`} />
      </div>
      <div className='my-5 '>
        <CustomButton text={`Read More`} />
      </div>
    </div>
  );

  const Singlepost = (
    <div className='my-5 px-10 mx-16'>
      <div className='my-5'>
        By John Doe | May 23, 2022
      </div>
      <div className='my-5'>
        <Heading3 body={`8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. `} />
      </div>
    </div>
  );

  const multiColorLine = (
    <div className=' px-10 flex mt-24'>
      <div className={`bg-[${darkgrey}] py-3 w-1/4`}>

      </div>
      <div className={`bg-[${darkyellow}] py-3 w-1/2`}>

      </div>
      <div className={`bg-[${purple}] py-3 w-1/4`}>

      </div>
    </div>
  );




  return (
    <div>
      <Navbar />
      <div className='py-5 px-10 flex gap-10 mt-24'>
        <div className='w-1/2 pl-5'>
          <Heading2 body={`Featured Post`} />
          {
            FeaturePost
          }
        </div>
        <div className='w-1/2 ml-6 '>
          <div className='flex items-center px-5 justify-between'>
            <div >
              <Heading2 body={`All Post`} />
            </div>
            <div className='text-blue-500'>
              View All
            </div>
          </div>
          {
            Singlepost
          }
          {
            Singlepost
          }
        </div>
      </div>
      {
        multiColorLine
      }
      <HomeAbout />

    </div>
  )
}

export default Home
