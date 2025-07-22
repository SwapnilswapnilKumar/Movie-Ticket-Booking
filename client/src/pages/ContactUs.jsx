import React from 'react';

function ContactUs() {
  return (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh] bg-white text-gray-800 rounded-3xl shadow-xl p-10">
      <h1 className="text-5xl font-extrabold mb-6 text-center tracking-wide text-gray-900">Contact Us</h1>

     

      <div className="flex flex-col items-center space-y-4 text-lg">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-blue-600">Email:</span>
          <a 
            href="mailto:swapnilkumartailor@gmail.com"  target = "_blank"
            className="text-blue-700 underline hover:text-blue-900 transition"
          >
            swapnilkumartailor@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <span className="font-semibold text-blue-600">LinkedIn:</span>
          <a 
            href="https://www.linkedin.com/in/swapnil-8600b723a" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-700 underline hover:text-blue-900 transition"
          >
            linkedin.com/in/swapnil-8600b723a
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
