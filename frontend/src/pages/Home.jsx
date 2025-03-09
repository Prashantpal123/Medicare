import React from 'react'
import hero_doctor1 from "../assets/hero-img01.png"
import hero_doctor2 from "../assets/hero-img02.png"
import hero_doctor3 from "../assets/hero-img03.png"
import process_1 from "../assets/icon01.png"
import process_2 from "../assets/icon02.png"
import process_3 from "../assets/icon03.png"
import { Link, NavLink } from 'react-router-dom'
import { BsArrowRightCircle } from "react-icons/bs";
import Servicelist from '../components/Services/Servicelist'
import About from '../components/About/About'
import doctor from "../assets/hero-img02.png" 
import DoctorList from '../components/Doctors/DoctorList'
import FaqListImg from "../assets/faq-img.png"
import Faq_list from '../components/Faq/Faq_list'
import Patient_review from '../components/Patient_review/Patient_review'
import Doctor_about from "./Doctors/Doctor_about"

const Home = () => {
  return (
    <>

      <div className='hero_container pb-3   flex flex-col md:flex-row  lg:justify-center gap-4 lg:gap-16 '>

     
    


        <div className='lg:max-w-[500px] mx-1  md:mx-3 lg:pt-[50px] md:pt-[5px]  mt-12 '>
          
          <div className='flex flex-col lg:gap-3' >
            <h1 className='font-[700] text-[18px] mt-2 md:text-[30px] leading-6 md:leading-9'>We Help Patients Live a Healthy longer Life ,Book Your Appoinmet Now |</h1>
              

        
       

            <p className='md:text-[20px] md:mt-4   ' > Lorem ipsum dolor sit amet consectetur, adipisi cing elit
              . Animi quibusdam voluptate
              reiciendis temp ore exercita tionem dolor
              ali quam, quod rem asp

              eriores amet corrupti omnis possimus quidem
              consequatur neque sit?<p className='hidden'> Et natus eaque dolo remque sapi ente unde, itaque quo
              architecto earum quam voluptates animi rem veniam simi lique sint, tempore
              aspernatur pariatur  optio dignissimos eligendi molestiae. Minus, rerum optio. Repudiandae eligendi
              pariatur at minus consequatur, esse rerum? Nostrum, laudantium  </p>ipsam,
              suscipit necessitatibus illum facilis asperiores soluta iusto dolore harum sunt.
              Quibusdam sed
              exercitationem lab</p>
            <div className='flex justify-center md:mt-3 mt-3 mb-3 '> <button className='bg-red-700 hover:bg-red-800 text-white hover:font-[650] font-[600] md:text-[20px] rounded-full lg:w-4/6 w-full mx-1 md:mx-0 py-2 mt-2 '>Book Apoinment Now</button>
            </div>

          </div>


        </div>

        <div className='md:flex gap-4 hidden mx-1 min-w-[450px] lg:max-w-[500px] lg:pt-[50px] md:mt-16 w-11/12  md:pt-[5px] justify-center'>
          <img src={hero_doctor1} alt="img" className='w-1/2 h-4/6' />
          <div className='mt-10 flex flex-col gap-4'>
            <img src={hero_doctor2} alt="img" />
            <img src={hero_doctor3} alt="img" />
          </div>



        </div>





      </div>






      {/*process container&*/}
      <div className='flex  justify-center bg-gradient-to-b from-blue-50 to-white md:py-8'>
  <div className='process_container w-full max-w-[1100px] flex flex-col mt-1 md:mt-24 px-4 text-center'>
    <div className='w-full'>
      <div className='flex justify-center'>
        <h1 className='font-semibold text-[23px] md:font-bold md:text-[35px] leading-8 md:leading-[60px] text-gray-800'>
          Providing The Best Medical Services
        </h1>
      </div>
      <div className='flex justify-center mt-2'>
        <p className='text-[15px] md:text-[15px] lg:w-1/3 text-gray-600'>
          World-class care for everyone. Our health system offers unmatched expert health care.
        </p>
      </div>
    </div>

    <div className='flex flex-colf md:flex-row w-full justify-center mt-5 md:mt-10 gap-3 md:gap-8 lg:gap-12'>
      <div className='process_box bg-white shadow-lg rounded-lg p-1 md:p-6 transform hover:scale-105 transition-transform duration-300'>
        <div className='flex justify-center md:mb-4'>
          <img src={process_1} alt='Find a Doctor' className='w-16 h-16' />
        </div>
        <h1 className='font-bold text-[10px] md:text-[20px] leading-4 md:leading-8 text-center text-gray-800'>Find a Doctor</h1>
        <p className='text-[5px] md:text-[16px] md:leading-7 text-center text-gray-600'>
          World-class care for everyone. Our health system offers unmatched expert health care. Book Now!
        </p>
        <Link to='/doctors' className='flex justify-center mt-1 md:mt-3'>
          <BsArrowRightCircle className='text-[20px] md:text-[40px] text-blue-500 hover:text-blue-700 transition-colors duration-300' />
        </Link>
      </div>

      <div className='process_box bg-white shadow-lg rounded-lg  p-1 md:p-6 transform hover:scale-105 transition-transform duration-300'>
        <div className='flex justify-center md:mb-4'>
          <img src={process_2} alt='Find a Location' className='w-16 h-16' />
        </div>
        <h1 className='font-bold text-[10px] md:text-[20px] md:leading-8 text-center text-gray-800'>Find a Location</h1>
        <p className='text-[5px] md:text-[16px] md:leading-7 text-center text-gray-600'>
          World-class care for everyone. Our health system offers unmatched expert health care. Book Now!
        </p>
        <Link to='/locations' className='flex justify-center mt-1 md:mt-3'>
          <BsArrowRightCircle className='text-[20px] md:text-[40px] text-blue-500 hover:text-blue-700 transition-colors duration-300' />
        </Link>
      </div>

      <div className='process_box bg-white shadow-lg rounded-lg p-1 md:p-6 transform hover:scale-105 transition-transform duration-300'>
        <div className='flex justify-center md:mb-4'>
          <img src={process_3} alt='Book Appointment' className='w-16 h-16' />
        </div>
        <h1 className='font-bold text-[10px] md:text-[20px]  md:leading-8 text-center text-gray-800'>Book Appointment</h1>
        <p className='text-[5px] md:text-[16px] md:leading-7 text-center text-gray-600'>
          World-class care for everyone. Our health system offers unmatched expert health care. Book Now!
        </p>
        <Link to='/appointments' className='flex justify-center mt-1 md:mt-3'>
          <BsArrowRightCircle className='text-[20px] md:text-[40px] text-blue-500 hover:text-blue-700 transition-colors duration-300' />
        </Link>
      </div>
    </div>
  </div>
</div>




     




      {/*/about section start */}
      <About  />
      
      {/*/about section end */}



      {/*service section start*/}
     
      <div classname=" service_container md:mt-24 bg-gradient-to-b from-blue-50 to-white  ">

      <div className='mt-8 md:mt-24'>
  <h1 className='font-[700] leading-8 text-[30px] text-center'> Our Medical services</h1>

  <div className='flex justify-center mt-2'>
    <p className='md:text-[px]   lg:w-1/3 text-center' >World class care for everyone. OUr health system offers
      unmatched, expert health care.</p> </div>

</div>
{/*   service list start */}
<section className=' flex w-full justify-center'>
<div className='md:mt-12 mt-3 flex  max-w-[1000px] '>
  <Servicelist />

</div>
</section>



</div>



      {/*feature section*/}

      <div className='feature_container   mt-8 md:mt-16  flex flex-col sm:flex-row mx-3  lg:justify-center gap-4 lg:gap-36  '>


      <div className=' mx-1 md:w-full block sm:hidden lg:pt-[50px] md:pt-[5px] md:mt-0 mt-2'>
          <div className='relative z-10 md:w-full md:flex justify-center'>
            <img src={doctor} alt="" className=' w-[400px]' />

          </div>


        </div>


        <div className='lg:max-w-[500px]  lg:pt-[50px] md:pt-[5px] md:mt-0 mt-2'>
          <div><h1 className='font-[700] text-[25px] md:text-[35px]  leading-none'>Get virtual treatment any time</h1></div>
          <div>


            <ul className='mt-1 md:mt-8 md:leading-10 text-gray-800 md:text-[20px]'>
              <li>(1) Schedule the appointment directly .
              </li>
              <li>
                (2) Search for your physician here and cotact their office

              </li>
              <li>
                (3) View our physician who are acccepting new patients .Use the
                online scheduling tool to select an appoinment time.
              </li>
            </ul>

          </div>
          <div className='flex sm:justify-center md:justify-start md:mt-5 mt-3  '> <button className='bg-sky-700  text-white font-[600] md:text-[20px] rounded-full lg:w-4/6 w-4/5 py-2 mt-2 '>Learn More</button>
          </div>
        </div>


        <div className=' mx-1  md:w-full lg:w-1/4  sm:flex hidden lg:pt-[50px] md:pt-[5px] md:mt-0 mt-2'>
          <div className='relative z-10 md:w-full md:flex justify-center'>
            <img src={doctor} alt="" className=' w-[400px]' />

          </div>


        </div>


      </div> 




      {/*our doctors section*/}

      <section className="doctor_section flex justify-center mx-3 ">
      <div className='max-w-[1800px] '>
        <div className='mt-8 md:mt-12 '>
          <h1 className='font-[700] leading-8 text-[30px] text-center'> Our Great Doctors</h1>

          <div className='flex justify-center mt-2  '>
            <p className='   lg:w-1/3 text-center' >World class care for everyone. OUr health system offers
              unmatched, expert health care.</p> </div>

        </div>

          <div className=' '>
            <DoctorList/>
          </div>
          </div>

      </section>

{/*  faq section */}
<section className="bg-gray-50  py-12 px-4 rounded-lg shadow-md">
  <div className="flex justify-center">
    <div className="flex flex-col md:flex-row gap-12 lg:gap-48 max-w-[1100px] w-full">
      {/* Left Side Image - Hidden on Small Screens */}
      <div className="hidden mt-10   md:block flex-shrink-0">
        <img
          src={FaqListImg}
          alt="FAQ Illustration"
          className="max-w-sm h-[450px] rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - FAQ Section */}
      <div className="w-full">
        <h2 className="font-bold px-2 text-xl md:text-4xl text-gray-900 leading-tight mb-1">
          Most Questions by Our Beloved Patients:
        </h2>
        <Faq_list />
      </div>
    </div>
  </div>
</section>






    </>
  )
}

export default Home
