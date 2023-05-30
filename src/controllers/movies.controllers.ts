import { Request, Response } from "express";
import { getMovies } from "../services/movies.services";

export const getMoviesControllers = async (req: Request, res: Response): Promise<Response> =>{
    const getMovieList = await getMovies()
    return res.status(200).json(getMovieList)
}

