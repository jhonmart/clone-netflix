import "./Banner.css";

import { Movie } from "@/interfaces/Movie";
import React from "react";

type BannerProps = {
  movie: Movie
}

export function Banner(props: BannerProps) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const firstDate = new Date(props.movie.first_air_date);
  const genres = props.movie.genres?.map((genre) => genre.name);
  const LIMIT_INFO = 200;

  return (
    <React.Fragment>
      <section className="banner" >
        <img src={BASE_URL + props.movie.backdrop_path} alt="movies" className="banner--image"/>
        <div className="banner--vertical">
          <div className="banner--horizontal">
            <div className="banner--name">{props.movie.original_name}</div>
            <div className="banner--info">
              <div className="banner--points">{props.movie.vote_average} pontos</div>
              <div className="banner--year">{firstDate.getFullYear()}</div>
              <div className="banner--seasons">
                {props.movie.number_of_seasons} temporada
                {props.movie.number_of_seasons !== 1 && "s"}
              </div>
            </div>
            {genres?.length ? (
              <div className="banner--genres">
                Gêneros: {genres.join(", ")}
              </div>
            ) : ""}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}