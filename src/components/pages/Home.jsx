import React from 'react'
import Button, { ButtonOutline } from '../button/Button'
import MovieList from '../movie-list/MovieList'

import HeroSlide from '../slide/HeroSlide'

const Home = () => {
  return (
    <div >
      <HeroSlide/>
      <div className='section mb-3'>
        {/* section header space-between */}
        <div className='section__header mb-2'>
          <h2>Top Trending Movies</h2>
            <ButtonOutline> View more</ButtonOutline>
        </div>

        <div>
          <MovieList/>
        </div>



  
      </div>

      <div className='section mb-3'>
        {/* section header space-between */}
        <div className='section__header mb-2'>
          <h2>Top Trending TV</h2>
            <ButtonOutline> View more</ButtonOutline>
        </div>

        <div>
          <MovieList/>
        </div>



  
      </div>

      <div className='section mb-3'>
        {/* section header space-between */}
        <div className='section__header mb-2'>
          <h2>New Movie</h2>
            <ButtonOutline> View more</ButtonOutline>
        </div>

        <div>
          <MovieList/>
        </div>



  
      </div>
    
    </div>
  )
}

export default Home