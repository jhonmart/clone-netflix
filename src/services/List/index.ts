const API_KEY = import.meta.env.VITE_APP_TMDB_KEY;
const API_BASE = "https://api.themoviedb.org/3";

import { ParamFetch } from "@/interfaces/Movie";

const basicFetch = async (
  endpoint: string,
  parameters: ParamFetch | {} = {}
) => {
  const url_paramerters = Object.entries({
    language: "pt-BR",
    api_key: API_KEY,
    ...parameters,
  })
    .map((parameter) => parameter.join("="))
    .join("&");
  const req = await fetch(
    `${API_BASE}${endpoint}${url_paramerters ? "?" + url_paramerters : ""}`
  );
  const json = await req.json();
  return json;
};

export const List = {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(`/discover/tv`, { with_network: 213 }),
      },
      {
        slug: "trending",
        title: "Recomendados oara Você",
        items: await basicFetch(`/trending/all/week`),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(`/movie/top_rated`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie`, { with_genres: 28 }),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/movie`, { with_genres: 35 }),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(`/discover/movie`, { with_genres: 27 }),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/movie`, { with_genres: 10749 }),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(`/discover/movie`, { with_genres: 99 }),
      },
    ];
  },
  getMovieInfo: async (movieId: number, type: "movie" | "tv") => {
    switch (type) {
      case "movie":
        return await basicFetch(`/movie/${movieId}`);
      case "tv":
        return await basicFetch(`/tv/${movieId}`);
    }
  },
};
