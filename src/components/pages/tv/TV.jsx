import React from 'react'
import './TV.scss'
import bgg from "../../../assets/footer-bg.jpg";
import { ButtonOutline } from "../../button/Button";
import Search from "../../search/Search";
import MovieList from '../../movie-list/MovieList';

const TV = () => {
  return (
    <>
      <div className="tv" style={{ backgroundImage: `url(${bgg})` }}>
        <div className="tv__content container">
          <div className="tv__content__title ">
            <h2>TV</h2>
          </div>
        </div>
      </div>

      <div className="section">
          <Search/>
      </div>
      <div className="tv__list section">
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
        <div className="tv__list__buttons">
            <ButtonOutline className="button_more">View More</ButtonOutline>

        </div>
      </div>
    </>
  )
}

export default TV