import React from "react";
import "./Movie.scss";
import MovieList from "../../movie-list/MovieList";

import bgg from "../../../assets/footer-bg.jpg";
import { ButtonOutline } from "../../button/Button";
import Search from "../../search/Search";

const Movie = () => {
  return (
    <>
      <div className="movie" style={{ backgroundImage: `url(${bgg})` }}>
        <div className="movie__content container">
          <div className="movie__content__title ">
            <h2>Movie</h2>
          </div>
        </div>
      </div>

      <div className="section">
          <Search/>
      </div>
      <div className="movie__list section">
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
        <div className="movie__list__buttons">
            <ButtonOutline className="button_more">View More</ButtonOutline>

        </div>
      </div>
    </>
  );
};

export default Movie;
