import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, Text, View } from 'react-native';

import Heading from './components/Heading'

import styles from './appStyles'

export default function Details() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeHeading}>Details page</Text>
      <Heading level="3">This is a heading</Heading>
    </SafeAreaView>
  );
}