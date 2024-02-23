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

    return (
        <>
        {movie &&
            <header className='banner-container' style={{
                backgroundSize:'cover',
                backgroundImage: `url('${imageHost+movie.poster_path})`,
                roundPosition:'center-center'
            }}>
                <div className='banner-content'>
                    <h1 className='banner-title'>{movie.title || movie.name || movie.original_name}</h1>
                    <div className="bannerButtonContainer">
                        <div className='banner-button'>Assistir</div>
                        <div className='banner-button'> Minha lista </div>
                        <div className='banner-description'> Minha lista </div>
                    </div>
                </div>
            </header>
        }
        </>
    )
}
