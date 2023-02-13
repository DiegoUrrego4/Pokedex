import {StyleSheet, View, Platform} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.container,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
      }}>
      <SearchInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
