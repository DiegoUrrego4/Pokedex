import React from 'react';
import {
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks';
import {PokemonCard} from '../components';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <View style={{...styles.globalMargin, ...homeStyles.flatContainer}}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // Header
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                ...homeStyles.listTitle,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          // Infinite Scroll
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
      </View>
    </>
  );
};

const homeStyles = StyleSheet.create({
  listTitle: {
    paddingBottom: 10,
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
  activityIndicator: {
    height: 100,
  },
  flatContainer: {
    alignItems: 'center',
  },
});
