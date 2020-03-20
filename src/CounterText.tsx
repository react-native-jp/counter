// src/CounterText.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

interface Props {
  count: number;
}

export default function CounterText(props: Props) {
  const {count} = props;

  return (
    <View style={styles.textContainer}>
      {count >= 10 && <Text>you're great!</Text>}
      <Text style={styles.text}>{count}</Text>
    </View>
  );
}
