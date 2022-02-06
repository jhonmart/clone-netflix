import React from "react";
import "./FeaturedMovie.css";

import { Movie } from "@/interfaces/Movie";

type FeaturedProps = {
  movie: Movie
}

export function FeaturedMovie(props: FeaturedProps) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const firstDate = new Date(props.movie.first_air_date);
  const genres = props.movie.genres?.map((genre) => genre.name);
  const LIMIT_INFO = 200;

  return (
    <React.Fragment>
      <section
        className="featured"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${BASE_URL}${props.movie.backdrop_path})`,
        }}
      >
        <div className="featured--vertical">
          <div className="featured--horizontal">
            <div className="featured--name">{props.movie.original_name}</div>
            <div className="featured--info">
              <div className="featured--points">{props.movie.vote_average} pontos</div>
              <div className="featured--year">{firstDate.getFullYear()}</div>
              <div className="featured--seasons">
                {props.movie.number_of_seasons} temporada
                {props.movie.number_of_seasons !== 1 && "s"}
              </div>
            </div>
            <div className="featured--description">
              {props.movie.overview?.slice(0, LIMIT_INFO).trim()}
              {props.movie.overview?.length > LIMIT_INFO && "..."}
            </div>
            <div className="featured--buttons">
              <a href={`/watch/${props.movie.id}`} className="featured--watchbutton">
                ► Assistir
              </a>
              <a
                href={`/list/add/${props.movie.id}`}
                className="featured--mylistbutton"
              >
                + Minha Lista
              </a>
            </div>
            {genres?.length ? (
              <div className="featured--genres">
                Gêneros: {genres.join(", ")}
              </div>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}