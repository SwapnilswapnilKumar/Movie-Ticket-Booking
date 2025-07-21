import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="px-6 mt-40 md:px-16 lg:px-36 w-full text-gray-700 bg-white border-t border-gray-200 py-16 relative overflow-hidden">
      
      <div className="absolute -top-20 -left-32 w-[300px] h-[300px] bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-32 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-3xl" />

      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-14 z-10 relative">
        <div className="md:max-w-96">
          <img className="w-100 h-auto" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            With Cinema Cloud, the magic of movies starts long before the theater — browse curated collections, view trailers in high quality, and reserve your seat in seconds for a cinematic experience that feels truly futuristic.
          </p>
          
        </div>

        <div className="flex-1 flex flex-wrap md:justify-end gap-12 md:gap-28">
          <div>
            <h2 className="font-semibold mb-5 text-gray-900 text-lg">Company</h2>
            <ul className="text-sm space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-300">Home</a></li>
              <li>
                <button onClick={()=>{navigate('/about_us'); scrollTo(0, 0)}} className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                About us 
            </button>
            </li>
            <li>
                <button onClick={()=>{navigate('/contact_us'); scrollTo(0, 0)}} className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Contact us 
            </button>
              </li>
              
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5 text-gray-900 text-lg">Get in touch</h2>
            <div className="text-sm space-y-2 text-gray-600">
              <p className="hover:text-blue-500 transition-colors duration-300">+1-234-567-890</p>
              <p className="hover:text-blue-500 transition-colors duration-300">cinemacloud@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-8 text-center text-xs text-gray-400 z-10 relative">
        © 2025 Cinema Cloud. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
