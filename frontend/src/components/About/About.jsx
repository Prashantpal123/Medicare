import React from 'react'
import doctor from "../../assets/hero-img01.png"
import about_card from "../../assets/about-card.png"

const About = () => {
  return (
    <>
      <div className='about_container  mt-10 flex flex-col lg:flex-row  mx-3 lg:justify-center gap-4 lg:gap-36   '>


<div className='lg:max-w-[900px] mx-1 lg:pt-[50px] md:pt-[5px] md:mt-0 mt-2'>
  <div className='relative z-10 flex justify-center'>
    <img src={doctor} alt="" />
    
  </div>
 

</div>

<div className='lg:max-w-[500px] mx-1 lg:pt-[50px] md:pt-[5px] md:mt-0 mt-2'>
  <div><h1 className='font-[700] text-[20px] md:text-[60px] leading-none'>Proud To Be One Of The Nations Best</h1></div>
  <div><p className='mt-4 md:text-[20px]'>For 30 years in a row , Us News & World Report has recognized as one of 
    the best public hospitals in the nation and #1 in Texas ,so you hve to need to try this
    amet consectetur adipisicing</p>
    <p className='mt-4 md:text-[20px] leading-7'>Our best is something we strive for each day caring for our pationts 
      not looking back at what we acomandation but towars what we cen do tommarow
      providing the best lorem impsum doctor sit ma this is so happy afiao aeihjaih 
      jh'fi9ugogv  w8gu eifhiu eh
    </p>
    </div>
    <div className='flex justify-center md:mt-5 mt-3  '> <button className='bg-sky-700 hover:bg-sky-800  text-white font-[600] md:text-[30px] rounded-full lg:w-4/6 w-4/5 py-2 mt-2 '>Learn More</button>
    </div>
</div>



</div>




    </>

  )
}

export default About
