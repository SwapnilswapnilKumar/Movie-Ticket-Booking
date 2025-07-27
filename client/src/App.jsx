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
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'
import { SignIn } from '@clerk/clerk-react'

const App = () => {

    const isAdminRoute = useLocation().pathname.startsWith('/admin');
  const { user } = useAppContext();
  console.log(user);


  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/contact_us' element={<ContactUs />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/loading/:nextUrl' element={<Loading />} />
        <Route path='/admin/*' element={ user ? <Layout /> : (
                  <div className='min-h-screen flex justify-center items-center'>
                    <SignIn fallbackRedirectUrl={'/admin'} />
                  </div>
                )}>
                  <Route index element={<Dashboard />}/>
                  <Route path='add-shows' element={<AddShows />}/>
                  <Route path='list-shows' element={<ListShows />}/>
                  <Route path='list-bookings' element={<ListBookings />}/>
                </Route>
    
      </Routes>

       {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
