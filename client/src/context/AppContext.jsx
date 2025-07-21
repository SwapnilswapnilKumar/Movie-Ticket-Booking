import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser, useAuth } from '@clerk/clerk-react'
import { toast } from 'react-hot-toast'


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const image_base_url = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

    const [shows, setShows] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useUser();
    const { getToken } = useAuth();


    const fetchShows = async () => {
        try {
            const { data } = await axios.get('/api/show/all');
            if(data.success){
                setShows(data.shows);
            }else{
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    } 

   
    const fetchUser = async () => {
        try {
            const token = await getToken();
            const { data } = await axios.get('/api/user/is-user', {headers: {Authorization: `Bearer ${token}`}});
            if(!data.success){
                toast.error("User Not Found (this is coming from fetchUser in AppContext.js)");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        fetchShows();
    },[])

    useEffect(()=>{
        if(user){
            fetchUser();
        }
    },[user])

    const value = { axios, user, getToken, navigate, shows, image_base_url }

    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);