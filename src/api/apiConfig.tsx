import axios from "axios";
import { api } from "../interfaces/Api";


const movieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key : api.api,
        language : api.language
    }
})

export default movieApi