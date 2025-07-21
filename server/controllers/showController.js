import Movie from '../models/Movie.js';
import Show from '../models/Show.js';



export const getShows = async (req, res) => {
    try {
        const shows = await Show.find({showDateTime: {$gte: new Date()}}).populate('movie').sort({ showDateTime: 1});

        const uniqueShows = new Set(shows.map(show => show.movie));
        res.json({ success: true, shows: Array.from(uniqueShows) });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


export const getShow = async (req, res) => {
    try {
        const { movieId } = req.params;
        const shows = await Show.find({movie: movieId, showDateTime: {$gte: new Date()}});

        const movie = await Movie.findById(movieId);
        const dateTime = {};

        shows.forEach((show) => {
            const date = show.showDateTime.toISOString().split("T")[0];
            if(!dateTime[date]){
                dateTime[date] = []
            }
            dateTime[date].push({ time: show.showDateTime, showId: show._id });
        })

        res.json({ success: true, movie, dateTime });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}