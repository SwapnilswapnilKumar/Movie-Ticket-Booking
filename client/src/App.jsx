import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Loading from './components/Loading'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

const App = () => {
  const { user } = useAppContext()
  console.log(user);

  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/contact_us' element={<ContactUs />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/loading/:nextUrl' element={<Loading />} />
    
      </Routes>
       <Footer />
    </>
  )
}

export default App
