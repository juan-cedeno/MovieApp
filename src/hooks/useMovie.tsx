
import { useState } from 'react';
import movieApi from '../api/apiConfig'
import { MovieResponse, Movies } from '../interfaces/Movie';

interface MovieState {
    movieNow : Movies[]
    moviePopular : Movies[]
    movieTopRate : Movies[]
    movieUpComing: Movies[]
}

export const useMovie = () => {
    
    const [movies, setMovies] = useState<MovieState>({
        movieNow: [],
        moviePopular: [],
        movieTopRate:  [],
        movieUpComing: []
    })
    const [loading, setLoading] = useState(true)

    const getMovies = async () => {
        const nowMoviePromise = movieApi.get<MovieResponse>('/now_playing')
        const PopularMoviePromise = movieApi.get<MovieResponse>('/popular')
        const topRateMoviePromise = movieApi.get<MovieResponse>('/top_rated')
        const upComingMoviePromise = movieApi.get<MovieResponse>('/upcoming')

        const resp = await Promise.all(
            [
                nowMoviePromise,
                PopularMoviePromise,
                topRateMoviePromise,
                upComingMoviePromise
            ]
        )

        setMovies({
            movieNow : resp[0].data.results,
            moviePopular : resp[1].data.results,
            movieTopRate : resp[2].data.results,
            movieUpComing : resp[3].data.results

        })

        setLoading(false)
    }

    return {
        getMovies,
        ...movies,
        loading
    }
}

