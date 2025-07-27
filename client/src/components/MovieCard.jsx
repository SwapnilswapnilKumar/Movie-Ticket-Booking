import React from 'react';
import { StarIcon } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import timeFormat from '../lib/timeFormat';
import { useAppContext } from '../context/AppContext';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { image_base_url } = useAppContext();

  return (
    <div className="flex flex-col justify-between w-[270px] min-h-[420px] p-4 rounded-2xl bg-white text-black backdrop-blur-md border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(91,104,227,0.6)] animate-fade-in">
      
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={image_base_url + movie.backdrop_path}
        alt={movie.title}
        className="rounded-xl h-52 w-full object-cover object-right-bottom cursor-pointer transform hover:scale-105 transition duration-500"
      />

      <p className="font-semibold text-black mt-4 truncate tracking-wide">
        {movie.title}
      </p>

      <p className="text-sm text-gray-400 mt-2">
        {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'} &bull;{' '}
        {movie.genres?.slice(0, 2).map((genre) => genre.name).join(' | ') || 'No Genre'} &bull;{' '}
        {movie.runtime ? timeFormat(movie.runtime) : 'Unknown'}
      </p>

      <div className="flex items-center justify-between mt-5">
        <button
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className="cursor-pointer px-4 py-2 text-xs font-medium bg-[linear-gradient(to_right,_#1FA2FF,_#12D8FA,_#A6FFCB)] text-black rounded-full hover:brightness-125 shadow-[0_0_10px_#12D8FA] transition-all duration-300"
        >
          Buy Tickets
        </button>

        <p className="flex items-center gap-1 text-sm text-black">
          <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-300" />
          {movie.vote_average?.toFixed(1) ?? 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
