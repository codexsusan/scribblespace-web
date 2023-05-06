import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import { Body1, Body2, Heading2, Heading3, Heading4, Label2 } from '../../common/typography/Typography'
import CustomButton from '../../common/button/CustomButton'
import { darkgrey, darkyellow, lavender, purple } from '../../common/colors/colors';
import HomeAbout from './components/HomeAbout';
import Footer from '../../common/footer/Footer';

function Home() {

  const FeaturePost = (
    <div className='border p-5'>
      <div className='font-bold'>
        Image Here
      </div>
      <div className='mt-5 '>
        By John Doe | May 23, 2022
      </div>
      <div className='my-5 '>
        <Heading2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Heading2>
      </div>
      <div className='my-5 '>
        <Body2>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </Body2>
      </div>
      <div className='my-5 '>
        <CustomButton text={`Read More`} />
      </div>
    </div>
  );

  const Singlepost = (
    <div className='my-5 px-5 bg-slate-100 py-5 rounded-lg'>
      <div className='my-5'>
        By John Doe | May 23, 2022
      </div>
      <div className='my-5'>
        <Heading3>
          8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today.
        </Heading3>
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

  const HeroSection = (
    <div className=' bg-slate-100 w-full p-8'>
        <div className='flex justify-center'>
          <Heading2>Home</Heading2>
        </div>
        <div className='flex justify-center '>
          <div className='w-1/3 text-center'>
            <Body2>
              Welcome to our vibrant community of passionate writers and curious minds. Discover captivating stories, insightful articles, and thought-provoking perspectives that will inspire and inform you.
            </Body2>
          </div>
        </div>
      </div>
  );




  return (
    <div className='w-full'>
      <Navbar />

      {
        HeroSection
      }

      <div className='py-5 px-10 flex gap-10 mt-10 '>
        <div className='w-1/2 pl-5'>
          <Heading2>Featured Post</Heading2>
          {
            FeaturePost
          }
        </div>
        <div className='w-1/2 ml-6 '>
          <div className='flex items-center px-5 justify-between'>
            <div >
              <Heading2>All Post</Heading2>
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
      <Footer />

    </div>
  )
}

export default Home
