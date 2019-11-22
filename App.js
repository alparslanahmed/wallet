import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import AuthLoading from './src/screens/AuthLoading';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store/store';
import LinearGradient from 'react-native-linear-gradient';
import {Text, StyleSheet} from 'react-native';

const AppNavigator = createStackNavigator({
        Home: {
            screen: HomeScreen,
        },
    },
    {
        initialRouteName: 'Home',
        transparentCard: true,
    });

const AuthNavigator = createStackNavigator({
        Login: {
            screen: LoginScreen,
        },
    },
    {
        initialRouteName: 'Login',
        transparentCard: true,
    });

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: AuthNavigator,
        App: AppNavigator,
    },

    {
        initialRouteName: 'AuthLoading',
        transparentCard: true,
    },
));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                    <LinearGradient colors={['#1F282D', '#080809']} start={{x: 1, y: 0}} style={styles.linearGradient}>
                        <AppContainer/>
                    </LinearGradient>
                </PersistGate>
            </Provider>
        );
    }
}
// Later on in your styles..
var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
