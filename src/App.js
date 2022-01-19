import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";
import MovieRow from "./components/MovieRow";
import Header from "./components/Header";
import tmdb from "./services/tmdb";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

export default () => {
  const [movieList, setMoviList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMoviList(list);
      let originals = list.find(category => category.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals.items.results.length - 1));
      let chosen = originals.items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      setBlackHeader(window.scrollY > 10);
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <Fragment>
      <Header black={blackHeader}/>
      {featureData && <FeaturedMovie item={featureData} />}
      <div className="page">
        <section className="lists">
          {movieList.map((category, category_key) => (
            <MovieRow key={category_key} {...category} />
          ))}
        </section>
      </div>
      <Footer />
      {!movieList.length && <Loading />}
    </Fragment>
  );
};
