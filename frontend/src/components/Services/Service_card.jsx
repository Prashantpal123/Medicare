import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Service_card = () => {
    return (

        <>
            <div className=' flex flex-col sm:flex-row items-center gap-7 justify-center md:gap-48'>
                <div className='max-w-64 mx-2 '>
                    <div className=''>
                        <h1 className='font-[700] text-[25px]'>Cancer Care</h1>
                    </div>

                    <div className='text-[15px] mt-1'>
                        <p>World-class care for everyone our
                            health system offers unmatched expert health care </p>
                    </div>

                    <div className='flex mt-3 md:mt-6 justify-between '>
                        <Link to="/doctors" className='flex justify-center '>

                            <BsArrowRightCircle className='text-[40px] text-gray-700 hover:bg-blue-700 rounded-full hover:text-white hover:border-black ' />

                        </Link>


                        <div className='mr-3 '>
                            <p className='font-[700] text-[30px] bg-pink-500 rounded-full px-3'>1</p>
                        </div>


                    </div>


                </div>

                <div className='max-w-64 mx-2'>
                    <div className=''>
                        <h1 className='font-[700] text-[25px]'>Labor & Delivery</h1>
                    </div>

                    <div className='text-[15px] mt-1'>
                        <p>World-class care for everyone our
                            health system offers unmatched expert health care </p>
                    </div>

                    <div className='flex mt-3 md:mt-6 justify-between '>
                        <Link to="/doctors" className='flex justify-center '>

                            <BsArrowRightCircle className='text-[40px] text-gray-700 hover:bg-blue-700 rounded-full hover:text-white hover:border-black ' />

                        </Link>


                        <div className='mr-3 '>
                            <p className='font-[700] text-[30px] bg-slate-400 rounded-full px-3'>2</p>
                        </div>


                    </div>


                </div>

                <div className='max-w-64 mx-2'>
                    <div className=''>
                        <h1 className='font-[700] text-[25px]'>Cancer Care</h1>
                    </div>

                    <div className='text-[15px] mt-1'>
                        <p>World-class care for everyone our
                            health system offers unmatched expert health care </p>
                    </div>

                    <div className='flex mt-3 md:mt-6 justify-between '>
                        <Link to="/doctors" className='flex justify-center '>

                            <BsArrowRightCircle className='text-[40px] text-gray-700 hover:bg-blue-700 rounded-full hover:text-white hover:border-black ' />

                        </Link>


                        <div className='mr-3 '>
                            <p className='font-[700] text-[30px] bg-yellow-400 rounded-full px-3'>3</p>
                        </div>


                    </div>


                </div>







            </div>

            <div className=' flex flex-col sm:flex-row items-center gap-7 justify-center mt-3 md:mt-12 md:gap-48'>
                <div className='max-w-64 mx-2 '>
                    <div className=''>
                        <h1 className='font-[700] text-[25px]'>Cancer Care</h1>
                    </div>

                    <div className='text-[15px] mt-1'>
                        <p>World-class care for everyone our
                            health system offers unmatched expert health care </p>
                    </div>

                    <div className='flex mt-3 md:mt-6 justify-between '>
                        <Link to="/doctors" className='flex justify-center '>

                            <BsArrowRightCircle className='text-[40px] text-gray-700 hover:bg-blue-700 rounded-full hover:text-white hover:border-black ' />

                        </Link>


                        <div className='mr-3 '>
                            <p className='font-[700] text-[30px] bg-green-500 rounded-full px-3'>4</p>
                        </div>


                    </div>


                </div>

                <div className='max-w-64 mx-2'>
                    <div className=''>
                        <h1 className='font-[700] text-[25px]'>Cancer Care</h1>
                    </div>

                    <div className='text-[15px] mt-1'>
                        <p>World-class care for everyone our
                            health system offers unmatched expert health care </p>
                    </div>

                    <div className='flex mt-3 md:mt-6 justify-between '>
                        <Link to="/doctors" className='flex justify-center '>

                            <BsArrowRightCircle className='text-[40px] text-gray-700 hover:bg-blue-700 rounded-full hover:text-white hover:border-black ' />

                        </Link>


                        <div className='mr-3 '>
                            <p className='font-[700] text-[30px] bg-red-500 rounded-full px-3'>5</p>
                        </div>


                    </div>


                </div>

                <div className='max-w-64 mx-2'>
                    <div className=''>
                        <h1 className='font-[700] text-[25px]'>Cancer Care</h1>
                    </div>

                    <div className='text-[15px] mt-1'>
                        <p>World-class care for everyone our
                            health system offers unmatched expert health care </p>
                    </div>

                    <div className='flex mt-3 md:mt-6 justify-between '>
                        <Link to="/doctors" className='flex justify-center '>

                            <BsArrowRightCircle className='text-[40px] text-gray-700 hover:bg-blue-700 rounded-full hover:text-white hover:border-black ' />

                        </Link>


                        <div className='mr-3 '>
                            <p className='font-[700] text-[30px] bg-purple-500 rounded-full px-3'>6</p>
                        </div>


                    </div>


                </div>







            </div>

        </>
    )
}

export default Service_card
