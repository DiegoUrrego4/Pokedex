import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />
      <TouchableOpacity style={screenStyles.button} activeOpacity={0.8}>
        <Text style={screenStyles.buttonText}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const screenStyles = StyleSheet.create({
  button: {
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
});
