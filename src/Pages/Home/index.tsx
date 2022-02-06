import React, { useEffect, useState, useCallback } from "react";
import "./App.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Loading } from "@/components/Loading";
import { FeaturedMovie } from "@/components/FeaturedMovie";
import { MovieRow } from "@/components/MovieRow";

import { List } from "@/services/List";

import { CategoryMovie, Movie } from "@/interfaces/Movie";

export function Home() {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movieList, setMoviList] = useState<CategoryMovie[] | []>([]);
  const [featureData, setFeatureData] = useState<Movie | false>(false);
  const [blackHeader, setBlackHeader] = useState(false);

  const loadImg = async (url: string) =>
  new Promise((resolve, reject) => {
    const IMG = new Image();
    IMG.src = url;
    IMG.onload = () => resolve(true);
  });
  const createFeatureData = async (movies: Movie[]) => {
    let randomChosen = Math.floor(
      Math.random() * (movies.length - 1)
    );
    let chosen = movies[randomChosen];
    let chosenInfo: Movie = await List.getMovieInfo(chosen.id, "tv");
    await loadImg(`${BASE_URL}${chosenInfo.backdrop_path}`);
    setFeatureData(chosenInfo);
    setTimeout(() => {
        createFeatureData(movies);
    }, 15e3);
  };
  const scrollListener = () => {
    setBlackHeader(window.scrollY > 10);
  };
  useEffect(() => {
    const loadAll = async () => {
      let list = await List.getHomeList();
      setMoviList(list);
      const originals = list.find((category: CategoryMovie) => category.slug === "originals");
      if (originals) {
        const movies: Movie[] = originals.items.results.filter((movie: Movie) => movie.backdrop_path)
        await createFeatureData(movies);
      }
    };

    loadAll();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <React.Fragment>
      <Header black={blackHeader} />
      {featureData ? <FeaturedMovie movie={featureData} /> : ""}
      <main className="page">
        <section className="lists">
          {movieList.map((category, category_key) => (
            <MovieRow key={category_key} {...category} />
          ))}
        </section>
      </main>
      <Footer />
      {movieList.length ? "" : <Loading />}
    </React.Fragment>
  )
}