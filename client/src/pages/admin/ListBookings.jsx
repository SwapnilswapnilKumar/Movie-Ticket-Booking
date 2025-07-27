import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import { dateFormet } from '../../lib/dateFormat';
import { useAppContext } from '../../context/AppContext';

const ListBookings = () => {

  const currency = import.meta.env.VITE_CURRENCY;

  const { axios, getToken, user } = useAppContext();

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllBookings = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get('/api/admin/all-bookings', {headers: {Authorization: `Bearer ${token}`}});
      setBookings(data.bookings)
    } catch (error) {
      console.error(false);
    }
    setIsLoading(false);
  }

  useEffect(()=>{
    if(user){
      getAllBookings();
    }
  }, [user]);


  return !isLoading ?  (
    <>
      <Title text1={"List"} text2={"Bookings"}/>
      <div className='max-w-4xl no-scrollbar mt-6 overflow-auto'>
        <table className='w-full border-collapse rounded-md overflow-hidden'>
          <thead>
            <tr className='bg-primary/20 text-left text-white'>
              <th className='p-2 font-medium pl-5'>User Name</th>
              <th className='p-2 font-medium'>Movie Name</th>
              <th className='p-2 font-medium'>Show Time</th>
              <th className='p-2 font-medium'>Seats</th>
              <th className='p-2 font-medium'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item, index) => (
              <tr key={index}>
                <td className='p-2 min-w-45 pl-5'>{item.user.name}</td>
                <td className='p-2'>{item.show.movie.title}</td>
                <td className='p-2'>{dateFormet(item.show.showDateTime)}</td>
                <td className='p-2'>{Object.keys(item.bookedSeats).map(seat => item.bookedSeats[seat])}</td>
                <td className='p-2'>{currency} {item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : <Loading />
}

export default ListBookings