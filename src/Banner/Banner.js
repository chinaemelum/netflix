import React, { useEffect, useState } from 'react'
import axios from '../axios'
import Request from '../Request'
import './Banner.scss'
const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(Request.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData()
    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n -1) + "..." : str;
    }
    return(
        <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(
                https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}
            )`,
            backgroundPosition: 'center center',
        }}
        
        
        >
          <div className="banner__content">
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name} </h1>

            <div className="banner__buttons">
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div> 
            <h1 className="banner__description">
              {truncate(movie?.overview, 150)}
            </h1>
            </div>
            
        </header>
    )
}

export default Banner