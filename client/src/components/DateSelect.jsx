import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import BlurCircle from './BlurCircle'; 

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const onBookHandler = () => {
    if (!selected) {
      return toast.error('Please select a date');
    }
    navigate(`/movies/${id}/${selected}`);
    scrollTo(0, 0);
  };

  return (
    <div id="dateSelect" className="pt-28 relative z-10">
      
      <div className="relative p-8 bg-white border border-gray-200 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.06)]">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" right="0px" />

        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div>
            <p className="text-lg font-semibold text-gray-800">Choose Date</p>
            <div className="flex items-center gap-6 mt-5">
              <ChevronLeftIcon className="w-6 h-6 text-gray-500 hover:text-primary transition" />

              <div className="grid grid-cols-3 sm:flex flex-wrap gap-3 sm:max-w-lg">
                {Object.keys(dateTime).map((date) => {
                  const d = new Date(date);
                  return (
                    <button
                      key={date}
                      onClick={() => setSelected(date)}
                      className={`flex flex-col items-center justify-center h-16 w-16 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selected === date
                          ? 'bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-white shadow-md'
                          : 'border border-gray-300 text-gray-700 hover:border-gray-500'
                      }`}
                    >
                      <span>{d.getDate()}</span>
                      <span>{d.toLocaleDateString('en-US', { month: 'short' })}</span>
                    </button>
                  );
                })}
              </div>

              <ChevronRightIcon className="w-6 h-6 text-gray-500 hover:text-primary transition" />
            </div>
          </div>

          <button
            onClick={onBookHandler}
            className="cursor-pointer mt-6 md:mt-0 px-8 py-3 rounded-full bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-white font-medium shadow-lg hover:brightness-110 transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
