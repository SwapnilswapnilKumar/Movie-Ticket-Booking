import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../assets/backgroundImage.jpg'
const HeroSection = () => {

    const navigate = useNavigate();
  return (
    <div  style ={{backgroundImage:`url(${backgroundImage})`}} className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36  bg-cover bg-center h-screen'>

        <img src={assets.warnerLogo} alt="" className="max-h-20 max-w-20 lg:h-25 mt-20 mx-50 "/>


        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-120 text-white'>Justice League</h1>

        <div className='flex items-center gap-4 text-gray-300'>
            <span>Action | Adventure | Sci-Fi</span>
            <div className='flex items-center gap-1'>
                <CalendarIcon className='w-4.5 h-4.5'/> 2017
            </div>
            <div className='flex items-center gap-1'>
                <ClockIcon className='w-4.5 h-4.5'/> 2h 8m
            </div>
        </div>

        <p className='max-w-md text-gray-300'>Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.</p>



        <button onClick={()=>navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
            Explore More
            <ArrowRight className='w-5 h-5' />
        </button>
    </div>
  )
}

export default HeroSection