import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>
            Proj <span className='text-yellow-400'>ect</span>
        </h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
            src="/images/mern.PNG"
            alt='portfolio'
            layout='fill'
            className='object-contain'/>
            </div>
            </div>
        
            <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
            src="/images/foo.PNG"
            alt='portfolio'
            layout='fill'
            className='object-contain'/>
            </div>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
            src="/images/shop.jpg"
            alt='portfolio'
            layout='fill'
            className='object-contain'/>
            </div>
            </div>
        
            <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
            src="/images/shopping cart.PNG"
            alt='portfolio'
            layout='fill'
            className='object-contain'/>
            </div>
            </div>
       
            <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
            src="/images/cc.PNG"
            alt='portfolio'
            layout='fill'
            className='object-contain'/>
            </div>
            </div>
        
            <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
            src="/images/expense.PNG"
            alt='portfolio'
            layout='fill'
            className='object-contain'/>
            </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
            src="/images/book.png"
            alt='portfolio'
            layout='fill'
            className='object-contain'/>
            </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
            src="/images/calc.PNG"
            alt='portfolio'
            layout='fill'
            className='object-contain'/>
            </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
            src="/images/quiz.PNG"
            alt='portfolio'
            layout='fill'
            className='object-contain'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Projects