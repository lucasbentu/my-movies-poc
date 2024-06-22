import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "9b6c7b82166bee653a1420e78c8e3ca3";
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}&language=pt-BR`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl('/movie/popular'));
  }

  static getMovieById(id) {
    return axios(withBaseUrl(`/movie/${id}`));
  }
}
