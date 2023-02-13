import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1, Tab2Screen} from './';
import {Platform, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const tabBarIcon = (color: string, name: string) => (
  <Icon name={name} color={color} size={25} />
);
export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          //   backgroundColor: 'red',
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255, 0.8)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}
      sceneContainerStyle={styles.tabsScene}>
      <Tab.Screen
        name="StackHome"
        component={Tab1}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => tabBarIcon(color, 'list-outline'),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Búsqueda',
          tabBarIcon: ({color}) => tabBarIcon(color, 'search-outline'),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabsScene: {
    backgroundColor: 'white',
  },
});
