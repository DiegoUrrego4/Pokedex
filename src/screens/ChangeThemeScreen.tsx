import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />
      <View style={screenStyles.buttonContainer}>
        <TouchableOpacity
          style={{...screenStyles.button, backgroundColor: colors.primary}}
          activeOpacity={0.8}
          onPress={setLightTheme}>
          <Text style={screenStyles.buttonText}>Light</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...screenStyles.button, backgroundColor: colors.primary}}
          activeOpacity={0.8}
          onPress={setDarkTheme}>
          <Text style={screenStyles.buttonText}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const screenStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
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
