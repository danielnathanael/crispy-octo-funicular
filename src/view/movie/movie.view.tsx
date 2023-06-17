import React, {useEffect} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import MovieViewModel from '../../viewmodel/movie.viewmodel';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

function MovieView({route}: {route: any}): JSX.Element {
  const navigation = useNavigation<any>();
  const {movie, getMovie} = MovieViewModel();

  useEffect(() => {
    getMovie(route?.params?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={25} />
      </Pressable>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
        }}
      />
      <Text style={styles.title}>{movie?.title}</Text>
      <TouchableOpacity style={styles.favoriteButton} activeOpacity={0.8}>
        <Text style={styles.favoriteTextButton}>Add to Favorites</Text>
      </TouchableOpacity>
      <Text style={styles.description}>{movie?.overview}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    padding: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
  },
  favoriteButton: {
    backgroundColor: '#3b444b',
    margin: 8,
    padding: 8,
  },
  favoriteTextButton: {
    textAlign: 'center',
  },
  description: {
    marginHorizontal: 8,
  },
});

export default MovieView;
