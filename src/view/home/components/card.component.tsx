import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../../../interfaces/movie.interface';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {useNavigation} from '@react-navigation/native';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export function CardLoading() {
  return (
    <View style={styles.loadingContainer}>
      <ShimmerPlaceholder style={styles.loadingShimmerContainer} />
    </View>
  );
}

function Card({data}: {data: Movie}): JSX.Element {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate('Movie', {id: data.id});
      }}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
        }}
        style={styles.backdrop}
      />
      <Text numberOfLines={2} style={styles.title}>
        {data.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: 100,
    borderRadius: 12,
  },
  title: {
    color: '#f9eef2',
  },
  backdrop: {
    height: 160,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  loadingContainer: {
    height: 220,
    width: 100,
    borderRadius: 12,
  },
  loadingShimmerContainer: {
    height: 160,
    width: 100,
    borderRadius: 12,
  },
});

export default Card;
