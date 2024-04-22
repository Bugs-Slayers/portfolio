import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div>
          <h1 className='text-[35px] md:text-[50px] text-white font-bold '>
            HI, I am <span className='text-yellow-400'>Nann Khaing Shwe Yee Lin!</span>
          </h1>
          <TextEffect />
          <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
         
          </p>
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
              <Link href="https://docs.google.com/document/d/14nHBk53iM1gVV0BxJyB074mMByR7DUK9/edit?usp=sharing&ouid=101576735491303452656&rtpof=true&sd=true"><p>Download Cv</p></Link>
              <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
            </button>
            <button className='flex items-center space-x-2'>
            <Link href="https://youtu.be/wJpnT0FtCNw"> <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200
     text-[#55e6a5]'/></Link>
              <p className='text-[20px] font-semibold text-white'>Video Introduction</p>
            </button>
          </div>
        </div>
        <div  className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
          <Image src="/images/hero.png" alt="user" layout='fill' className='object-cover rounded-full' />
        </div>
      </div>
    </div>
  );
}

export default Hero;