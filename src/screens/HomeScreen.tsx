import React from 'react';
import {Image, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <Text style={{...styles.globalMargin, ...styles.title, top: top + 20}}>
        Pokedex
      </Text>
    </>
  );
};
