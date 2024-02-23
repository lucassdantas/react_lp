import { useEffect, useState } from 'react'
import { getMovies } from '../../lib/api'
import { Movie } from '../../@types/moviesType'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import './style.css'



const imageHost = 'https://image.tmdb.org/t/p/original/'
export const Row = ({title, path, isLarge}:{title:string, path:string, isLarge:boolean}) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  const fetchMovies = async (_path:string) => {
    try {
      const data = await getMovies(_path)
      setMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnClick = (movie:Movie) => {
    if(trailerUrl) return setTrailerUrl('')
    movieTrailer(movie.title ||movie.name || movie.original_name)
    .then((url:string) => {setTrailerUrl(url)})
    .catch((err:ErrorCallback) => console.log(err))
  }

  useEffect(() => {
    fetchMovies(path)
  }, [path])
  
  return (
    <div className='row-container'>
      <h2 className='row-header'>{title}</h2>
      <div className='row-cards'>
        {movies.map((movie:Movie) => {
          return (
            <img 
              onClick={() => handleOnClick(movie)}
              key={movie.id}
              src={imageHost + (isLarge? movie.backdrop_path : movie.poster_path)}
              alt={movie.name}
              className={isLarge? 'movie-card-large' : 'movie-card'}
            />
          )
        })}
      </div>
      {trailerUrl && 
        <ReactPlayer 
          url={trailerUrl}
          playing={true}
        />
      }
    </div>
  )
}
