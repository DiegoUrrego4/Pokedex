import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.container,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
      }}>
      <Text>SearchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
