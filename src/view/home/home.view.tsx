import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import HomeViewModel from '../../viewmodel/home.viewmodel';
import HorizontalList from './components/horizontal_list.component';

function HomeView(): JSX.Element {
  const {
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
  } = HomeViewModel();

  useEffect(() => {
    const getData = async () => {
      await Promise.allSettled([
        getNowPlayingList(),
        getPopularList(),
        getTopRatedList(),
        getUpcomingList(),
      ]);
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <Text style={styles.title}>Now Playing Movies</Text>
      <HorizontalList isLoading={nowPlayingListLoading} data={nowPlayingList} />
      <Text style={styles.title}>Popular Movies</Text>
      <HorizontalList isLoading={popularListLoading} data={popularList} />
      <Text style={styles.title}>Top Rated Movies</Text>
      <HorizontalList isLoading={topRatedListLoading} data={topRatedList} />
      <Text style={styles.title}>Upcoming Movies</Text>
      <HorizontalList isLoading={upcomingListLoading} data={upcomingList} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#f9eef2',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 8,
    marginTop: 24,
  },
});

export default HomeView;
