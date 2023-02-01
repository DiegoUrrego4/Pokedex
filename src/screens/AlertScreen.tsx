import React from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Título',
      'este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed'),
        },
      ],
      {
        // Esto es para que cuando haga click afuera se cierre la alerta.
        cancelable: true,
        // Esta función se ejecuta en caso tal el usuario le de click afuera de la alerta.
        onDismiss: () => console.log('On Dismiss'),
      },
    );
  };

  const showPrompt = () => {
    // Esto solo se puede en iOS
    // Alert.prompt(
    //   '¿Está seguro?',
    //   'Esta acción no se puede revertir',
    //   (valor: string) => console.log('Info:', valor),
    //   'default',
    //   'Hola Mundo',
    //   'phone-pad',
    // );
    // ! Esto se hace con la librería react-native-prompt-android.
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};
