import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const Animacion3 = () => {

    const [animacion] = useState( new Animated.Value(14));
  
    useEffect(() => {
      Animated.timing(
        animacion,
        {
          toValue: 40,
          duration: 500
        }
      ).start();
    }, [])
    return (
        <View>
            <Animated.Text style={[styles.texto, {fontSize: animacion}]}>Animacion 3</Animated.Text>
        </View>
    );
};

export default Animacion3;

const styles = StyleSheet.create({
    texto: {
      textAlign: 'center'
    }
});
