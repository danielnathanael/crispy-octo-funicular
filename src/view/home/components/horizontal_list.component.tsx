import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Card, {CardLoading} from './card.component';
import {Movie} from '../../../interfaces/movie.interface';

interface HorizontalListParams {
  isLoading: boolean;
  data: Movie[];
}

const Separator = () => {
  return <View style={styles.separator} />;
};

function HorizontalList({isLoading, data}: HorizontalListParams): JSX.Element {
  if (isLoading) {
    return (
      <FlatList
        horizontal={true}
        data={new Array(5).fill(0)}
        contentContainerStyle={styles.container}
        renderItem={() => {
          return <CardLoading />;
        }}
        ItemSeparatorComponent={Separator}
      />
    );
  }

  return (
    <View>
      <FlatList
        horizontal={true}
        data={data}
        contentContainerStyle={styles.container}
        renderItem={({item}: {item: Movie}) => {
          return <Card key={item.id} data={item} />;
        }}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  separator: {
    width: 10,
  },
});

export default HorizontalList;
