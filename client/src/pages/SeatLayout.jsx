import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import Loading from '../components/Loading';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import isoTimeFormat from '../lib/isoTimeFormat';
import BlurCircle from '../components/BlurCircle';
import toast from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';

const SeatLayout = () => {
  const groupRows = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"]];
  const { axios, getToken, user } = useAppContext();
  const { id, date } = useParams();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);
  const [occupiedSeats, setOccupiedSeats] = useState([]);

  const getShow = async () => {
    try {
      const { data } = await axios.get(`/api/show/${id}`);
      if (data.success) setShow(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSeatClick = (seatId) => {
    if (!selectedTime) return toast("Please select time first");
    if (!selectedSeats.includes(seatId) && selectedSeats.length > 4) return toast("You can only select 5 seats");
    if (occupiedSeats.includes(seatId)) return toast("This seat is already booked");

    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((seat) => seat !== seatId) : [...prev, seatId]
    );
  };

  const renderSeat = (row, count = 9) => (
    <div key={row} className="flex flex-wrap gap-2 justify-center">
      {Array.from({ length: count }, (_, i) => {
        const seatId = `${row}${i + 1}`;
        const isSelected = selectedSeats.includes(seatId);
        const isOccupied = occupiedSeats.includes(seatId);

        return (
          <button
            key={seatId}
            onClick={() => handleSeatClick(seatId)}
            disabled={isOccupied}
            className={`h-9 w-9 sm:h-10 sm:w-10 rounded-md border text-xs font-semibold transition-all duration-300 
              ${
                isOccupied
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-40'
                  : isSelected
                  ? 'bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-white shadow-md'
                  : 'bg-white border-gray-300 hover:border-primary hover:text-primary'
              }`}
          >
            {seatId}
          </button>
        );
      })}
    </div>
  );

  const getOccupiedSeats = async () => {
    try {
      if (!selectedTime?.showId) return;
      const { data } = await axios.get(`/api/booking/seats/${selectedTime.showId}`);
      if (data.success) setOccupiedSeats(data.occupiedSeats);
      else toast.error(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const bookTickets = async () => {
    try {
      if (!user) return toast.error("Please login to proceed");
      if (!selectedTime || !selectedSeats.length)
        return toast.error("Please select a time and seats");

      const token = await getToken();
      const { data } = await axios.post(
        "/api/booking/create",
        { showId: selectedTime.showId, selectedSeats },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        window.location.href = data.url;
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getShow();
  }, []);

  useEffect(() => {
    if (selectedTime) getOccupiedSeats();
  }, [selectedTime]);

  return show ? (
    <div className="flex flex-col md:flex-row gap-10 my-40 px-4 sm:px-6 lg:px-36 py-20 relative">
      <div className="w-full md:w-64 bg-white border border-gray-200 rounded-xl shadow-xl py-8 px-4 md:sticky md:top-32 z-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Available Timings</h2>
        <div className="space-y-2">
          {show.dateTime[date]?.map((item) => (
            <div
              key={item.time}
              onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedTime?.time === item.time
                  ? 'bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-white shadow-md'
                  : 'hover:bg-primary/10 text-gray-700'
              }`}
            >
              <ClockIcon className="w-5 h-5" />
              <span className="text-sm">{isoTimeFormat(item.time)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex flex-col items-center">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0" right="0" />
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 text-center">
          Select Your Seat
        </h1>
        <img src={assets.screenImage} alt="screen" className="mb-1 w-40 sm:w-56" />
        <p className="text-sm text-gray-500 mb-6">SCREEN SIDE</p>

        <div className="w-full flex flex-col items-center gap-6 mt-4 text-xs">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {groupRows[0].map((row) => renderSeat(row))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 sm:gap-10">
            {groupRows.slice(1).map((group, idx) => (
              <div key={idx}>
                {group.map((row) => renderSeat(row))}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={bookTickets}
          className={`cursor-pointer mt-12 sm:mt-16 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium text-white bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] hover:brightness-110
            transition shadow-lg flex items-center gap-2 `}
            
        >
          Proceed to Checkout
          <ArrowRightIcon strokeWidth={3} className="w-4 h-4" />
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SeatLayout;
