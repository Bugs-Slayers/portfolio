import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

// interface Props {
//     title: string
//     year: string
// }

const Skillsitem = () => {
  return (
    // <div className='mb-[4rem] md:mb-[8rem]'><span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold
    // text-[18px] border-[2px] border-[#55e6a5]'>{year}</span>
    // <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
    //     {title}
    // </h1>
    // <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>

    // </p>
    // </div>
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
          <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]'>EDUCATION</h1>
          {/* <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
                Transforming <span className='text-yellow-400'>Visions</span>
            </h2> */}
          <div className='mb-[3rem] flex items-center md:space-x-10'>
            <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
            <p className='text-[19px] text-slate-300 w-[80%]'>  <h1>Lithan <span className='text-yellow-400'>Educlass</span> Academy</h1><p>Singapore</p><br />
              <h3>Pearson level 3 diploma in IT 2022</h3><p className='text-yellow-400'>(finished)</p>
              <h3>Pearson level4 diploma in IT 2023</h3> <p className='text-yellow-400'>(finished)</p>
              <br />

            </p>

          </div>

        </div>
        <div className='mb-[3rem] flex items-center md:space-x-10'>
          <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>

          <h3 className='text-[19px] text-slate-300 w-[80%]'>Pearson level 5 Higher National Diploma in Computing (application

            development)</h3><p className='text-yellow-400'>(current)</p>
        </div>

      </div>
    </div>


  )
}

export default Skillsitem