import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import { dummyTrailers } from '../assets/assets'
import { PlayCircleIcon } from 'lucide-react'

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[1])

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-24 overflow-hidden bg-[#0F111A] text-white relative">
      <BlurCircle top="-80px" right="-120px" />
      <BlurCircle bottom="-100px" left="-100px" />

      <h2 className="text-center text-3xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 animate-fade-in">
        Trailers
      </h2>

      <div className="relative mt-10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,255,255,0.5)] border border-white/10 backdrop-blur-xl">
        <iframe
          className="mx-auto w-full aspect-video rounded-xl border-none transition-all duration-500 hover:scale-[1.01]"
          src={currentTrailer.videoUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      <div className="group grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
            className="relative rounded-xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(18,216,250,0.2)] border border-white/10 hover:shadow-[0_8px_40px_rgba(18,216,250,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <img
              src={trailer.image}
              alt=""
              className="w-full h-48 object-cover brightness-90 rounded-xl"
            />
            <PlayCircleIcon className="absolute top-1/2 left-1/2 w-10 h-10 text-white opacity-80 transform -translate-x-1/2 -translate-y-1/2 transition hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailerSection
