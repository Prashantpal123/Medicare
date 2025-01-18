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

      <div className='hero_container   flex flex-col lg:flex-row  lg:justify-center gap-4 lg:gap-16 '>





        <div className='lg:max-w-[600px] mx-3 lg:pt-[50px] md:pt-[5px] md:mt-0 mt-2 '>
          <div className='flex flex-col lg:gap-3' >
            <h1 className='font-[700] text-[20px] md:text-[60px] md:leading-none'>We Help Patients Live a Healthy longer Life ,Book Your Appoinmet Now |</h1>
            <p className='md:text-[20px] md:mt-4 mt-2' >Lorem ipsum dolor sit amet consectetur, adipisicing elit
              . Animi quibusdam voluptate
              reiciendis tempore exercitationem dolor
              aliquam, quod rem asp


              eriores amet corrupti omnis possimus quidem
              consequatur neque sit? Et natus eaque doloremque sapiente unde, itaque quo
              architecto earum quam voluptates animi rem veniam similique sint, tempore
              aspernatur pariatur
              optio dignissimos eligendi molestiae. Minus, rerum optio. Repudiandae eligendi
              pariatur at minus
              consequatur, esse rerum? Nostrum, laudantium ipsam,
              suscipit necessitatibus illum facilis asperiores soluta iusto dolore harum sunt.
              Quibusdam sed
              exercitationem lab</p>
            <div className='flex justify-center md:mt-5 mt-3  '> <button className='bg-red-700 hover:bg-red-800 text-white hover:font-[650] font-[600] md:text-[30px] rounded-full lg:w-4/6 w-4/5 py-2 mt-2 '>Book Apoinment Now</button>
            </div>

            {/*achivment*/}

            


          </div>


        </div>

        <div className='flex gap-4 mx-1 lg:max-w-[600px] lg:pt-[50px] md:mt-16 w-11/12  md:pt-[5px] justify-center'>
          <img src={hero_doctor1} alt="img" className='w-1/2 h-4/6' />
          <div className='mt-10 flex flex-col gap-4'>
            <img src={hero_doctor2} alt="img" />
            <img src={hero_doctor3} alt="img" />
          </div>



        </div>





      </div>






      {/*process container&*/}

      <div className='process_container flex mt-12 md:mt-24 flex-col mx-6  '>
        <div className='md:text-center w-full '>
          <div className='md:flex md:justify-center'>
            <h1 className='md:font-[700] md:text-[50px] text-[25px] font-[600] flex md:justify-center md:leading-[60px] leading-8  mlg:w-1/4'>Providing The Best Medical Services</h1> </div>
          <div className=' flex justify-center mt-2  md:mt-3'><p className='md:text-[20px]   lg:w-1/3'>World-class care for everyone our health system offers unmatched expert health care</p> </div>



        </div>


        <div className='flex md:flex-row flex-col w-full justify-center mt-5 md:mt-10 gap-12 lg:gap-24'>


          <div className='process_box'>

            <div className='flex justify-center'><img src={process_1} alt="" /></div>
            <h1 className='font-[700] leading-8 text-[30px] text-center'>Find a Doctor</h1>
            <p className='text-[16px] leading-7 lg:max-w-80 text-center md:mt-4 '>World-class care for everyone our health system offers unmatched expert health care Book Now !</p>
            <Link to="/doctors" className='flex justify-center mt-3 md:mt-6'>
              <BsArrowRightCircle className='text-[50px] hover:text-[45px] text-gray-700 hover:bg-blue-700 rounded-full  hover:text-white  hover:border-black ' />

            </Link>

          </div>


          <div className='process_box'>

            <div className='flex justify-center'><img src={process_2} alt="" /></div>
            <h1 className='font-[700] leading-8 text-[30px] text-center'>Find a Location</h1>
            <p className='text-[16px]   leading-7 lg:max-w-80 text-center md:mt-4 '>World-class care for everyone our health system offers unmatched expert health care Book Now !</p>
            <Link to="/doctors" className='flex justify-center mt-3 md:mt-6'>
              <BsArrowRightCircle className='text-[50px] text-gray-700 hover:bg-blue-700 rounded-full hover:text-white hover:border-black ' />

            </Link>

          </div>

          <div className='process_box'>

            <div className='flex justify-center'><img src={process_3} alt="" /></div>
            <h1 className='font-[700] leading-8 text-[30px] text-center mt-2'>Book  Appoinnment</h1>
            <p className='text-[16px] leading-7 lg:max-w-80 text-center mt-2 md:mt-4 '>World-class care for everyone our health system offers unmatched expert health care Book Now !</p>
            <Link to="/doctors" className='flex justify-center mt-3 md:mt-6'>
              <BsArrowRightCircle className='text-[50px] text-gray-700 hover:bg-blue-700 rounded-full hover:text-white hover:border-black ' />

            </Link>

          </div>





        </div>


      </div>




      {/*/about section start */}
      <About  />
      
      {/*/about section end */}



      {/*service section start*/}
     
      <div classname="service_container md:mt-24  ">

      <div className='mt-8 md:mt-24'>
  <h1 className='font-[700] leading-8 text-[30px] text-center'> Our Medical services</h1>

  <div className='flex justify-center mt-2  md:mt-3'>
    <p className='md:text-[20px]   lg:w-1/3 text-center' >World class care for everyone. OUr health system offers
      unmatched, expert health care.</p> </div>

</div>
{/*   service list start */}
<div className='md:mt-12 mt-3 '>
  <Servicelist />

</div>



</div>



      {/*feature section*/}

      <div className='feature_container mt-8 md:mt-16  flex flex-col lg:flex-row mx-3  lg:justify-center gap-4 lg:gap-36  '>




        <div className='lg:max-w-[500px] mx-1 lg:pt-[50px] md:pt-[5px] md:mt-0 mt-2'>
          <div><h1 className='font-[700] text-[30px] md:text-[45px]  leading-none'>Get virtual treatment any time</h1></div>
          <div>


            <ul className='mt-4 md:mt-8 leading-10 md:text-[25px]'>
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
          <div className='flex sm:justify-center md:justify-start md:mt-5 mt-3  '> <button className='bg-sky-700  text-white font-[600] md:text-[30px] rounded-full lg:w-4/6 w-4/5 py-2 mt-2 '>Learn More</button>
          </div>
        </div>


        <div className=' mx-1 md:w-full lg:w-1/4  flex justify-center lg:pt-[50px] md:pt-[5px] md:mt-0 mt-2'>
          <div className='relative z-10 md:w-full md:flex justify-center'>
            <img src={doctor} alt="" className='md:w-1/2 lg:w-full ' />

          </div>


        </div>


      </div>

      {/*our doctors section*/}

      <div className="doctor_section">

        <div className='mt-8 md:mt-24'>
          <h1 className='font-[700] leading-8 text-[30px] text-center'> Our Great Doctors</h1>

          <div className='flex justify-center mt-2  md:mt-3'>
            <p className='md:text-[20px]   lg:w-1/3 text-center' >World class care for everyone. OUr health system offers
              unmatched, expert health care.</p> </div>

        </div>

          <div className=' flex justify-center'>
            <DoctorList/>
          </div>

      </div>

{/*  faq section */}
<div className='w-ful flex justify-center mt-10 md:mt-24'>

<div className='flex gap-[50px] lg:gap-0 max-w-[1400px] justify-center'>
  <div className='w-1/2 hidden md:block '>
  <img src={FaqListImg} alt="img" /></div>



  <div className='w-full md:w-1/2 mx-3'>
  <h2 className=' font-[700] text-[20px] md:text-[60px] md:leading-none '>Most questions by our beloved patients : </h2>
  <Faq_list className="" />
    </div>

</div>


</div>



  { /* patients review */ }    
  <div className='patient_review_container md:mt-24'>
    <div className='xl:w-470px mx-auto'>
      <h2 className='font-[700] text-[25px] leading-8 md:text-[40px] text-center'>What our patient say</h2>
      <div className='flex justify-center mt-2  md:mt-6'>
            <p className='md:text-[20px]   lg:w-1/3 text-center' >World class care for everyone. OUr health system offers
              unmatched, expert health care.</p> </div>
    </div>
    

  </div>

    </>
  )
}

export default Home
