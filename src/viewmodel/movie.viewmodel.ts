import {useState} from 'react';
import MoviesDataModel from '../models/movies.model';
import {Movie} from '../interfaces/movie.interface';

function MovieViewModel() {
  const dataModel = MoviesDataModel();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [movieLoading, setMovieLoading] = useState<boolean>(false);

  async function getMovie(id: string) {
    if (!movieLoading) {
      setMovieLoading(true);
      const result: any = await dataModel.fetchMovieDetail(id);
      setMovie(result);
      setMovieLoading(false);
    }
  }

  return {
    movie,
    movieLoading,
    getMovie,
  };
}

export default MovieViewModel;
