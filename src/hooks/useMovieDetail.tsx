import { useState } from "react";
import movieApi from "../api/apiConfig"
import { MovieFull } from '../interfaces/MovieDetail';
import { Cast, CastElement } from '../interfaces/Cast';

interface MovieDetail {
    movieDetail? : MovieFull,
    cast: CastElement[],
    loading : boolean
}

export const useMovieDetail = (id : number) => {

    const [movieFull, setMovieFull] = useState<MovieDetail>({
        movieDetail: undefined,
        cast : [],
        loading : true
    })
    const getMovieFull = async () => {

        const movieFullPromise = movieApi.get<MovieFull>(`/${id}`)
        const castPromise = movieApi.get<Cast>(`/${id}/credits`)

        const resp = await Promise.all ([
            movieFullPromise,
            castPromise
        ])

        setMovieFull({
            movieDetail: resp[0].data,
            cast: resp[1].data.cast,
            loading : false
        })
    }

    return {
        ...movieFull,
        getMovieFull
    }

    
}

