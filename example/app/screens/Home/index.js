import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { observer } from "mobx-react-lite"
import SplashScreen from 'react-native-splash-screen'
import { useStores } from '../../models';
const HomeScreen = observer(({
    navigation
}) => {
    const { demoStore } = useStores()
    const { demo } = demoStore
    useEffect(() => {
        SplashScreen.hide();
    }, [])
    return (
        <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", flex: 1 }}>
            <Text>Hello Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate("demo")}>
                <Text>Go to Demo Screen</Text>
            </TouchableOpacity>
        </View>
    )
});

export default HomeScreen;
