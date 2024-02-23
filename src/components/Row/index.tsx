import { useEffect, useState } from 'react'
import { getMovies } from '../../lib/api'
import { Movie } from '../../@types/moviesType'
import './style.css'



const imageHost = 'https://image.tmdb.org/t/p/original/'
export const Row = ({title, path}:{title:string, path:string}) => {
  const [movies, setMovies] = useState([])
  
  const fetchMovies = async (_path:string) => {
    try {
      const data = await getMovies(_path)
      setMovies(data.results)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
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
              key={movie.id}
              src={imageHost+movie.poster_path}
              alt={movie.name}
              className='movie-card'
            />
          )
        })}
      </div>
    </div>
  )
}
