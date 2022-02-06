interface Genre {
  name: string;
}

interface Movie {
  id: number;
  adult: boolean;
  backdrop_path: string;
  first_air_date: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  original_name: string;
  poster_path: string;
  release_date: string;
  title: string;
  genres: Genre[];
  video: boolean;
  vote_average: number;
  vote_count: number;
  number_of_seasons: number;
}

interface ResponseMovie {
  results: Movie[];
}

interface CategoryMovie {
  slug: string;
  title: string;
  items: ResponseMovie;
}

interface ParamFetch {
  with_network: number;
  with_genres: number;
}

export type { Movie, ResponseMovie, CategoryMovie, ParamFetch };
