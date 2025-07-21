import React from 'react';

function AboutUs() {
  return (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh] text-white bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#0f2027] rounded-3xl shadow-2xl p-10">
      <h1 className="text-5xl font-extrabold mb-6 text-center tracking-wide">About Us</h1>
      
      <p className="text-lg leading-8 mb-4">
        Hey there! I'm <span className="font-semibold text-blue-300">Swapnil</span>, currently a <span className="font-semibold text-yellow-300">React.js Intern at Celebal Technologies</span>. This project marks the grand finale of my journey with CSI and showcases everything I’ve learned so far!
      </p>

      <p className="text-lg leading-8 mb-4">
        Welcome to our futuristic <span className="font-bold text-green-300">Movie Ticket Booking Application</span> — built with cutting-edge technology to provide a seamless and intuitive movie booking experience.
      </p>

      <p className="text-lg font-semibold mt-8 mb-3 text-indigo-200">Key Features of the Project:</p>
      <ul className="list-disc list-inside space-y-2 text-base tracking-wide text-gray-200">
        <li><span className="text-white font-medium">Powered by MERN Stack</span> (MongoDB, Express, React, Node.js)</li>
        <li>Modern, <span className="text-white font-medium">fully responsive UI</span> optimized for all devices</li>
        <li>Secure <span className="text-white font-medium">user authentication and authorization</span></li>
        <li>Seamless payment flow with <span className="text-white font-medium">Razorpay integration (test mode)</span></li>
        <li>Seat selection, real-time blocking, and receipt generation</li>
      </ul>

      <p className="text-md mt-8 text-gray-300 italic">
        Built with passion, powered by React, and crafted for movie lovers like you. 
      </p>
    </div>
  );
}

export default AboutUs;
