import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const Animacion4 = () => {

    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 360,
                duration: 500
            }
        ).start();
    }, []);

    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    });

    const estiloAnimacion = {
        transform: [{rotate: interpolacion}]
    }

    return (
        <View>
            <Animated.View style={[styles.caja, estiloAnimacion]}></Animated.View>
        </View>
    );
};

export default Animacion4;

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
});
