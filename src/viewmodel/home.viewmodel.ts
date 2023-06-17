import {useState} from 'react';
import MoviesDataModel from '../models/movies.model';
import {Movie} from '../interfaces/movie.interface';

function HomeViewModel() {
  const dataModel = MoviesDataModel();

  const [nowPlayingList, setNowPlayingList] = useState<Movie[]>([]);
  const [nowPlayingListLoading, setNowPlayingListLoading] =
    useState<boolean>(false);

  const [popularList, setPopularList] = useState<Movie[]>([]);
  const [popularListLoading, setPopularListLoading] = useState<boolean>(false);

  const [topRatedList, setTopRatedList] = useState<Movie[]>([]);
  const [topRatedListLoading, setTopRatedListLoading] =
    useState<boolean>(false);

  const [upcomingList, setUpcomingList] = useState<Movie[]>([]);
  const [upcomingListLoading, setUpcomingListLoading] =
    useState<boolean>(false);

  async function getNowPlayingList() {
    if (!nowPlayingListLoading) {
      setNowPlayingListLoading(true);
      const result: any = await dataModel.fetchNowPlaying();
      if (Array.isArray(result.results)) {
        setNowPlayingList(result.results);
      }
      setNowPlayingListLoading(false);
    }
  }

  async function getPopularList() {
    if (!popularListLoading) {
      setPopularListLoading(true);
      const result: any = await dataModel.fetchPopular();
      if (Array.isArray(result.results)) {
        setPopularList(result.results);
      }
      setPopularListLoading(false);
    }
  }

  async function getTopRatedList() {
    if (!topRatedListLoading) {
      setTopRatedListLoading(true);
      const result: any = await dataModel.fetchTopRated();
      if (Array.isArray(result.results)) {
        setTopRatedList(result.results);
      }
      setTopRatedListLoading(false);
    }
  }

  async function getUpcomingList() {
    if (!upcomingListLoading) {
      setUpcomingListLoading(true);
      const result: any = await dataModel.fetchUpcoming();
      if (Array.isArray(result.results)) {
        setUpcomingList(result.results);
      }
      setUpcomingListLoading(false);
    }
  }

  return {
    nowPlayingList,
    nowPlayingListLoading,
    getNowPlayingList,

    popularList,
    popularListLoading,
    getPopularList,

    topRatedList,
    topRatedListLoading,
    getTopRatedList,

    upcomingList,
    upcomingListLoading,
    getUpcomingList,
  };
}

export default HomeViewModel;
