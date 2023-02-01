import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components';
import {menuItems} from '../data/menuItems';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const itemSeparator = () => {
    return <View style={homeStyles.itemSeparator} />;
  };

  return (
    <View style={{...homeStyles.container, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<HeaderTitle title="Opciones de menú" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 8,
  },
});
