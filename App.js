import React from 'react';
import { Provider } from 'react-redux';
import { Platform, StatusBar, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Store from './store';
import HomeScreen from './screens/Home';
import WatchScreen from './screens/WatchVideo';
import Player from './components/Player';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <StatusBar barStyle={'light-content'} />
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#000000',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerShadowVisible: false,
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="WatchVideo" component={WatchScreen} />
                </Stack.Navigator>
                <Player />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
