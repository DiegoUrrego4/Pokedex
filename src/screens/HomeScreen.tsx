import React from 'react';
import {
  FlatList,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Image source={{uri: item.picture}} style={homeStyles.pokemonImage} />
        )}
        // ListHeaderComponent={
        //   <Text
        //     style={{...styles.globalMargin, ...styles.title, top: top + 20}}>
        //     Pokedex
        //   </Text>
        // }
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator
            style={homeStyles.activityIndicator}
            size={20}
            color="grey"
          />
        }
      />
    </>
  );
};

const homeStyles = StyleSheet.create({
  pokemonImage: {
    width: 100,
    height: 100,
  },
  activityIndicator: {
    height: 100,
  },
});
