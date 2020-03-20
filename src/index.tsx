// src/index.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import CounterText from './CounterText';
import PlusButton from './PlusButton';
import ReduceButton from './ReduceButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default function Counter() {
  const [count, setCounter] = React.useState(0);

  return (
    <View style={styles.container}>
      <PlusButton count={count} setCounter={setCounter} />
      <CounterText count={count} />
      <ReduceButton count={count} setCounter={setCounter} />
    </View>
  );
}
