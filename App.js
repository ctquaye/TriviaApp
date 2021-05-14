import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//navigation routes
import Navigator from './src/routes/ListStack'

export default function App() {
  
  return (    
      <Navigator/>    
  );
}

const parent = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
