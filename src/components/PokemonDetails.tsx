import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {PokemonFull} from '../interfaces';
import {FadeInImage} from './';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
        ...detailsStyles.detailsContainer,
      }}>
      {/* Types y Peso */}
      <View style={detailsStyles.container}>
        <Text style={detailsStyles.title}>Types:</Text>
        <View style={detailsStyles.typesContainer}>
          {pokemon.types.map(({type}) => (
            <Text
              key={type.name}
              style={{
                ...detailsStyles.regularText,
                ...detailsStyles.textMargin,
              }}>
              {type.name}
            </Text>
          ))}
        </View>
        {/* Peso */}
        <Text style={detailsStyles.title}>Peso:</Text>
        <Text style={detailsStyles.regularText}>{pokemon.weight}kg:</Text>
      </View>
      {/* Sprites */}
      <View
        style={{...detailsStyles.container, ...detailsStyles.spritesContainer}}>
        <Text style={detailsStyles.title}>Sprites:</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={detailsStyles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={detailsStyles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={detailsStyles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={detailsStyles.basicSprite}
        />
      </ScrollView>

      {/* Habilidades */}
      <View style={detailsStyles.container}>
        <Text style={detailsStyles.title}>Habilidades base:</Text>
        <View style={detailsStyles.typesContainer}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              key={ability.name}
              style={{
                ...detailsStyles.regularText,
                ...detailsStyles.textMargin,
              }}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      {/* Movimientos */}
      <View style={detailsStyles.container}>
        <Text style={detailsStyles.title}>Movimientos:</Text>
        <View style={detailsStyles.movesContainer}>
          {pokemon.moves.map(({move}) => (
            <Text
              key={move.name}
              style={{
                ...detailsStyles.regularText,
                ...detailsStyles.textMargin,
              }}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
      {/* Stats */}
      <View style={detailsStyles.container}>
        <Text style={detailsStyles.title}>Stats:</Text>
        <View>
          {pokemon.stats.map(stat => (
            <View key={stat.stat.name} style={detailsStyles.statsContainer}>
              <Text
                style={{
                  ...detailsStyles.regularText,
                  ...detailsStyles.textMargin,
                  ...detailsStyles.textStats,
                }}>
                {stat.stat.name}
              </Text>
              <Text
                style={{
                  ...detailsStyles.regularText,
                  ...detailsStyles.statsValue,
                }}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>

        {/* Sprite Final */}
        <View style={detailsStyles.finalSprite}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={detailsStyles.basicSprite}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const detailsStyles = StyleSheet.create({
  detailsContainer: {
    marginTop: 370,
  },
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  typesContainer: {
    flexDirection: 'row',
  },
  movesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  regularText: {
    fontSize: 19,
  },
  textMargin: {
    marginRight: 10,
  },
  spritesContainer: {
    marginTop: 20,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
  statsContainer: {
    flexDirection: 'row',
  },
  textStats: {
    marginRight: 10,
    width: 150,
    textTransform: 'capitalize',
  },
  statsValue: {
    fontWeight: 'bold',
  },
  finalSprite: {
    marginBottom: 20,
    alignItems: 'center',
  },
});
