import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Loading = () => {
  const { nextUrl } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextUrl) {
      const timer = setTimeout(() => {
        navigate('/' + nextUrl);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [nextUrl, navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] animate-fadeIn scale-95 animate-duration-700">
      <div className="animate-spin rounded-full h-16 w-16 border-[6px] border-t-sky-500 border-gray-300 shadow-md"></div>
      <p className="mt-4 text-gray-600 text-lg animate-pulse">Redirecting, please wait...</p>
    </div>
  )
}

export default Loading
