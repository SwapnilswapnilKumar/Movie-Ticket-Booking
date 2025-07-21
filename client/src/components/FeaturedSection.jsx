import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle';
import MovieCard from './MovieCard';
import { useAppContext } from '../context/AppContext';
import Loading from '../components/Loading'

const FeaturedSection = () => {

    const navigate = useNavigate();
    const { shows } = useAppContext();
    console.log("this is featured section shows: ",shows);

  return shows.length > 0 ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
        
        <div className='relative flex items-center justify-between pt-20 pb-10'>
            <BlurCircle top='0' right='-80px'/>
            <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
            <button onClick={()=>{navigate('/movies'); scrollTo(0, 0)}} className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'>
                View All
                <ArrowRight className='group-hover:translate-x-1 transition w-4.5 h-4.5' />
            </button>
        </div>

        <div className='flex flex-wrap justify-center gap-8 mt-8'>
          {shows.slice(0, 5).map((show) => (
            <MovieCard key={show._id} movie={show} />
          ))}
        </div>

        <div className='flex justify-center mt-20'>
          <button onClick={()=>{navigate('/movies'); scrollTo(0, 0)}} className='px-10 py-3 text-sm bg-[linear-gradient(to_right,_#1FA2FF,_#12D8FA,_#A6FFCB)] hover:brightness-125 transition rounded-md font-medium cursor-pointer'>Show more</button>
        </div>
    </div>
  ) : <Loading />
}

export default FeaturedSection