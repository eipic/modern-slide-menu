import React from 'react';
import Home from './src/screens/home';
import { StatusBar } from 'react-native';

export default function App() {
  
  StatusBar.setHidden(true, 'slide');

  return (
    <Home/>
  );
}