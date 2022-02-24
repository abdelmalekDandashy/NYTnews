/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import SplashScreen from 'react-native-splash-screen'

const Splash = ({ navigation }) => {
    useEffect(() => {
        // SplashScreen.hide();
    }, [])

    return (
        <View
            style={styles.container}
        >
            <Text>
                Splash
            </Text>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },

});
