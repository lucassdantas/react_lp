import React, { useEffect, useState } from 'react'
import './style.css'
import { categories, getMovies } from '../../lib/api'
import { Movie } from '../../@types/moviesType'
import { MovieFetchResults } from '../../@types/MovieFetchResults'

const imageHost = 'https://image.tmdb.org/t/p/original/'
export const Banner = () => {
    const [movie, setMovie] = useState<Movie>()
    
    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalsCategory =  categories.find(category => category.name === 'netflixOriginals')
            if(netflixOriginalsCategory){
                getMovies(netflixOriginalsCategory.path).then((data:MovieFetchResults) => {
                    if(data.results && data.results.length > 0){
                        const randomIndex = Math.floor(Math.random() * data.results.length)
                        setMovie(data.results[randomIndex])
                    }
                })
            }   
        } catch (error) {
            console.log(error)
        }
    }
   
    useEffect(() => {fetchRandomMovie()}, [])

    return (
        <>
        {movie &&
            <img 
                src={imageHost+movie.poster_path}
                alt={movie.name}
                className={'movie-card'}
            />
        }
        </>
    )
}
