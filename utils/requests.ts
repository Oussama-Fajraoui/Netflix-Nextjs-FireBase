import { API_KEY } from "../constants/apikey";

const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchWarMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10752`,
  fetchSFMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchAnimationMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-U`,
  fetchNowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`,
};

export default requests;