import {Movie} from '../interfaces/movie.interface';

function MoviesDataModel() {
  const fetchNowPlaying = (): Promise<Movie[]> => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing';

    const headers = new Headers();
    headers.append('Authorization', 'Bearer READ_TOKEN');
    headers.append('Content-Type', 'application/json');

    return fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching movies');
        }
        return response.json();
      })
      .then(data => {
        return data as Movie[];
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  };

  const fetchPopular = (): Promise<Movie[]> => {
    const url = 'https://api.themoviedb.org/3/movie/popular';

    const headers = new Headers();
    headers.append('Authorization', 'Bearer READ_TOKEN');
    headers.append('Content-Type', 'application/json');

    return fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching movies');
        }
        return response.json();
      })
      .then(data => {
        return data as Movie[];
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  };

  const fetchTopRated = (): Promise<Movie[]> => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated';

    const headers = new Headers();
    headers.append('Authorization', 'Bearer READ_TOKEN');
    headers.append('Content-Type', 'application/json');

    return fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching movies');
        }
        return response.json();
      })
      .then(data => {
        return data as Movie[];
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  };

  const fetchUpcoming = (): Promise<Movie[]> => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming';

    const headers = new Headers();
    headers.append('Authorization', 'Bearer READ_TOKEN');
    headers.append('Content-Type', 'application/json');

    return fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching movies');
        }
        return response.json();
      })
      .then(data => {
        return data as Movie[];
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  };

  const fetchMovieDetail = (id: string): Promise<Movie> => {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const headers = new Headers();
    headers.append('Authorization', 'Bearer READ_TOKEN');
    headers.append('Content-Type', 'application/json');

    return fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching movies');
        }
        return response.json();
      })
      .then(data => {
        return data as Movie;
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  };

  return {
    fetchNowPlaying,
    fetchPopular,
    fetchTopRated,
    fetchUpcoming,
    fetchMovieDetail,
  };
}

export default MoviesDataModel;
