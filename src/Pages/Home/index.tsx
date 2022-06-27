import React, { useEffect, useState, useRef } from "react";
import "./App.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Loading } from "@/components/Loading";
import { FeaturedMovie } from "@/components/FeaturedMovie";
import { MovieRow } from "@/components/MovieRow";
import { Banner } from "@/components/Banner";

import { List } from "@/services/List";

import { CategoryMovie, Movie } from "@/interfaces/Movie";

export function Home() {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const TIME_BANNER = 60;
  const [movieList, setMoviList] = useState<CategoryMovie[]>([]);
  const [featureData, setFeatureData] = useState<Movie | false>(false);
  const [blackHeader, setBlackHeader] = useState<boolean>(false);
  const [timeForShowBanner, setTimeForShowBanner] = useState<number>(Date.now() + TIME_BANNER * 1e3);
  const [timeForShowFeature, setTimeForShowFeature] = useState<number>(Date.now() + TIME_BANNER * 500);
  let intervalObserverScroll = useRef(0);
  let timeFeature = useRef(0);

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
    if (timeForShowFeature < Date.now() || !featureData) {
      setFeatureData(chosenInfo);
      setTimeForShowFeature(Date.now() + TIME_BANNER * 500);
    }
    timeFeature.current = setTimeout(() => {
      createFeatureData(movies);
    }, 15e3);
    return () => clearTimeout(timeFeature.current);
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

  const decreaseTime = () => setTimeForShowBanner((prev) => {
    document.body.style.overflowY = prev > Date.now() ? "auto" : "hidden";
    return prev;
  });

  useEffect(() => {
    intervalObserverScroll.current = setInterval(decreaseTime, 1e3);

    document.onmousemove = function () {
      document.body.style.overflowY = "auto";
      setTimeForShowBanner(Date.now() + TIME_BANNER * 1e3);
    }
    return () => {
      document.body.style.overflowY = "auto";
      setTimeForShowBanner(Date.now() + TIME_BANNER * 1e3);
      clearInterval(intervalObserverScroll.current);
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
      {movieList.length && featureData ? "" : <Loading />}
      {timeForShowBanner < Date.now() && featureData ? <Banner movie={featureData} /> : ""}
    </React.Fragment>
  )
}