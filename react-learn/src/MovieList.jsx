import React from 'react'

function MovieList(props) {
  const movieList = props.movieList
return (
    <div className='Movie-List'>
        <ul>
            {movieList.map((movie)=>{
                //console.log(movie)
                return (<li key={movie}>{movie}</li>)
            })}
        </ul>
    </div>
    
  )
}

export default MovieList