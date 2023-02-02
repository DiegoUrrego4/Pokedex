import React from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <HeaderTitle title="ModalScreen" />
      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent>
        {/* Background negro */}
        <View style={modalStyles.container}>
          <View style={modalStyles.modalBox}>
            <Text style={modalStyles.modalTitle}>Modal Title</Text>
            <Text style={modalStyles.modalBody}>Cuerpo del modal</Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalBody: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 20,
  },
});
