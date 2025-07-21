import express from 'express';
import {  getShow, getShows } from '../controllers/showController.js';

const showRouter = express.Router();

showRouter.get('/all', getShows);
showRouter.get('/:movieId', getShow);

export default showRouter;