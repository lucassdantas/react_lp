import { categoriesType } from "../@types/categoriesType" 

const apiKey:string = 'd6d48073c86f5d66df4a0d7124b844e1'

export const categories:categoriesType[] = [
    {
        name: 'trending',
        title:'Em alta',
        path:`/trending/movie/week?language=pt-BR&api_key=${apiKey}`
    },
    {
        name: 'netflixOriginals',
        title:'Originais Netflix',
        path:`/discover/tv?language=pt-BR&api_key=${apiKey}`
    },
    {
        name: 'topRated',
        title:'Populares',
        path:`/movie/top_rated?language=pt-BR&api_key=${apiKey}`
    },
    {
        name: 'comedy',
        title:'Comédias',
        path:`/discover/tv?with_genres=35&api_key=${apiKey}`
    },
    {
        name: 'romances',
        title:'Romances',
        path:`/discover/tv?with_genres=1074&api_key=${apiKey}`
    },
    {
        name: 'documentaries',
        title:'Documentários',
        path:`/discover/tv?with_genres=99&api_key=${apiKey}`
    },
]

export const getMovies = async (path:string) => {
    try {
        const url:string = `https://api.themoviedb.org/3/${path}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}