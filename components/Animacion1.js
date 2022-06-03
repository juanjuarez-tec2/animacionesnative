import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const Animacion1 = () => {

  const [animacion] = useState( new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      animacion,
      {
        toValue: 1,
        duration: 1000
      }
    ).start();
  }, [])

  return (
    <Animated.View
      style={{opacity: animacion}}
    >
      <Text style={styles.texto}>Animacion 1</Text>
    </Animated.View>
  );
};

export default Animacion1;

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center'
  }
});
