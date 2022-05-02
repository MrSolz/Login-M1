import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { store } from '../../models';

// interface demoScreenProps { }

const DemoScreen = observer(() => {
    const { demoStore } = store
    const { demo } = demoStore

    React.useEffect(() => {
        console.log('====================================');
        console.log("demoStore", demo);
        console.log('====================================');
    }, [])
    return (
        <View style={styles.container}>
            <Text>Hello Demo</Text>
        </View>
    );
});

export default DemoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "row"
    }
});
