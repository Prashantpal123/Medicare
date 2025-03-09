import React from 'react'
import doctor from "../../assets/doctor-img03.png"
import about_card from "../../assets/about-card.png"
 
const About = () => {
  return (
    <>
      <div className='about_container  sm:mt-10 flex flex-col sm:flex-row   mx-1 md:justify-center gap-4 sm:gap-6 lg:gap-20   '>


<div className='lg:max-w-[900px] mx-1 lg:pt-[50px] md:pt-[5px] md:mt-0 mt-2'>
  <div className='relative  hidden z-10 sm:block   justify-center '>
    <img src={doctor} alt="" className=' min-w-[400px]' />
    
  </div>
 

</div>

<div className='lg:max-w-[500px]   lg:pt-[50px] md:pt-[5px] md:mt-0 mt-2'>
  <div><h1 className='font-[700] text-[20px] md:text-[30px] leading-none'>Proud To Be One Of The Nations Best</h1></div>
  <div className='relative sm:hidden mt-3  flex w-full max-w-[500px] '>
    <img src={doctor} alt="" className='w-[400px]' />
    
  </div>
  <div><p className='mt-4 md:text-[15px]'>For 30 years in a row , Us News & World Report has recognized as one of 
    the best public hospitals in the nation and #1 in Texas ,so you hve to need to try this
    amet consectetur adipisicing</p>
    <p className='md:mt-4 md:text-[15px] hidden sm:block md:leading-7'>Our best is something we strive for each day caring for our pationts 
      not looking back at what we acomandation but <p className='hidden md:block'>towars what we cen do tommarow
      providing the best lorem impsum doctor sit ma this is so happy afiao aeihjaih 
      jh'fi9ugogv  w8gu eifhiu eh Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi incidunt, 
      nisi ipsam et voluptate, porro labore debitis totam 
      asperiores possimus est veniam minus optio ipsum perspiciatis ullam nam alias.</p>
    </p>
    </div>
    <div className='flex justify-center md:mt-5 mt-3  '> <button className='bg-sky-700 hover:bg-sky-800  text-white font-[600] md:text-[15px] rounded-full lg:w-4/6 w-full  py-2 mt-2 '>Learn More</button>
    </div>
</div>



</div>




    </>

  )
}

export default About