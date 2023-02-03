import React, {useContext} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import {CustomSwitch, HeaderTitle} from '../components';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useForm} from '../hooks';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {form, isSuscribe, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribe: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text Inputs" />
            <TextInput
              style={{...inputStyles.input, backgroundColor: colors.primary}}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
              keyboardType="default"
            />
            <TextInput
              style={{...inputStyles.input, backgroundColor: colors.primary}}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />
            <View style={inputStyles.switchContainer}>
              <Text style={{...inputStyles.switchText, color: colors.text}}>
                Suscribirme
              </Text>
              <CustomSwitch
                isOn={isSuscribe}
                onChange={value => onChange(value, 'isSuscribe')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={{...inputStyles.input, backgroundColor: colors.primary}}
              placeholder="Ingrese su teléfono"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={inputStyles.keyboardMargin} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const inputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0, 0.3)',
    marginVertical: 10,
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  keyboardMargin: {
    height: 100,
  },
  switchText: {
    fontSize: 25,
  },
});
