
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotesScreen from './NotesScreen';
import TasksScreen from './TasksScreen';
import StorageScreen from './StorageScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Storage" component={StorageScreen} />
    </Tab.Navigator>
  );
}
