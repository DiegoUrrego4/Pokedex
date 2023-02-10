import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {PokemonFull} from '../interfaces';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
        ...detailsStyles.detailsContainer,
      }}>
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
      </View>
      {/* Sprites */}
      <View
        style={{...detailsStyles.container, ...detailsStyles.spritesContainer}}>
        <Text style={detailsStyles.title}>Sprites:</Text>
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
  },
  typesContainer: {
    flexDirection: 'row',
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
});
