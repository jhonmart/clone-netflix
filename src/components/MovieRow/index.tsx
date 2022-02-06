import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import React, { useState } from "react";
import "./MovieRow.css";

import { Movie } from "@/interfaces/Movie";

type MovieRowProps = {
  title: String;
  items: {
    results: Movie[];
  };
}

export function MovieRow(props: MovieRowProps) {
  const [scrollX, setScrollX] =  useState(-400);

  const BASE_URL = "https://image.tmdb.org/t/p/w300";
  
  const handleLeftArrow = () => {
    const newValue = scrollX + Math.round(window.innerWidth / 2);
    setScrollX(newValue > 0 ? 0 : newValue);
  }

  const handleRightArrow = () => {
    const LIMIT = window.innerWidth - (props.items.results.length * 150);
    const newValue = scrollX - Math.round(window.innerWidth / 2);
    setScrollX(LIMIT > newValue ? LIMIT - 60 : newValue);
  }
  return (
    <React.Fragment>
      <div className="movieRow">
        <h2>{props.title}</h2>
        <div className="movieRow--left" onClick={handleLeftArrow}>
          <NavigateBefore style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--right" onClick={handleRightArrow}>
          <NavigateNext style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--listarea">
          <div className="movieRow--list" style={{marginLeft: scrollX, width: props.items.results.length * 150}}>
            {props.items.results.map((movie, movie_key) => (
              <div key={movie_key} className="movieRow--item">
                <img
                  src={`${BASE_URL}${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}