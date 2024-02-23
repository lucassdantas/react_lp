import { useEffect, useState } from 'react'
import { categories, getMovies } from '../../lib/api'
import { Movie } from '../../@types/moviesType'
import { MovieFetchResults } from '../../@types/MovieFetchResults'
import './style.css'

const imageHost = 'https://image.tmdb.org/t/p/original'
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

    function truncate(str:string, n:number){
        return str.length>n? str.substring(0, n-1) + '...':str
    }
    
    return (
        <>
        {movie &&
            <header className='banner-container' style={{
                backgroundSize:'cover',
                backgroundImage: `url('${imageHost+movie.poster_path})`,
            }}>
                <div className='banner-content'>
                    <h1 className='banner-title'>{movie.title || movie.name || movie.original_name}</h1>
                    <div className="banner-button-container">
                        <button className='banner-button'>Assistir</button>
                        <button className='banner-button'> Minha lista </button>
                    </div>
                    <div className='banner-description'> <p>{truncate(movie.overview, 80)} </p></div>
                </div>
            </header>
        }
        </>
    )
}
