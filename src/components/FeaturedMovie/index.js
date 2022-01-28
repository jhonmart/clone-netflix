import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ item }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const firstDate = new Date(item.first_air_date);
  const genres = item.genres.map((genre) => genre.name);
  const LIMIT_INFO = 200;

  return (
    <Fragment>
      <section
        className="featured"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${BASE_URL}${item.backdrop_path})`,
        }}
      >
        <div className="featured--vertical">
          <div className="featured--horizontal">
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--info">
              <div className="featured--points">{item.vote_average} pontos</div>
              <div className="featured--year">{firstDate.getFullYear()}</div>
              <div className="featured--seasons">
                {item.number_of_seasons} temporada
                {item.number_of_seasons !== 1 && "s"}
              </div>
            </div>
            <div className="featured--description">
              {item.overview.slice(0, LIMIT_INFO).trim()}
              {item.overview.length > LIMIT_INFO && "..."}
            </div>
            <div className="featured--buttons">
              <a href={`/watch/${item.id}`} className="featured--watchbutton">
                ► Assistir
              </a>
              <a
                href={`/list/add/${item.id}`}
                className="featured--mylistbutton"
              >
                + Minha Lista
              </a>
            </div>
            {genres.length && (
              <div className="featured--genres">
                Gêneros: {genres.join(", ")}
              </div>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FeaturedMovie;