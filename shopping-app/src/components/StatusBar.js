import React, {useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {BudgetContext} from '../context/BudgetContext'
//import Animated, { Easing, withTiming } from 'react-native-reanimated';

const StatusBar = (props) => {
  const {progress} = props
  const {status} = useContext(BudgetContext)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Budget | ${status.budget}</Text>
      <View style={styles.statusBarContainer}>
        <View style={[styles.statusBar, {width: `${progress}%`}]}><Text></Text></View>
      </View>
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statusBarContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
  },
  statusBar: {
    borderRadius: 10,
    backgroundColor: '#4CAF50',
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StatusBar;
