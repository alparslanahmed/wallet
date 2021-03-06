import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import AuthLoading from './src/screens/AuthLoading';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store/store';
import {StyleSheet} from 'react-native';
import TransactionsScreen from './src/screens/Transactions';
import CreateTransaction from './src/screens/CreateTransaction';
import SplashScreen from 'react-native-splash-screen';

const AppNavigator = createStackNavigator({
        Home: {
            screen: HomeScreen,
        },
        Transactions: {
            screen: TransactionsScreen,
        },
        CreateTransaction: {
            screen: CreateTransaction,
        },
    },
    {
        initialRouteName: 'Home',
        cardStyle: {backgroundColor: '#1F282D'},
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#1F282D',
                textAlign: 'center',
                shadowOpacity: 0,
                elevation: 0,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign: 'center',
                fontSize: 16,
                fontFamily: 'Heebo-Regular',
            },
        },
    });

const AuthNavigator = createStackNavigator({
        Login: {
            screen: LoginScreen,
        },
        Register: {
            screen: RegisterScreen,
        },
    },
    {
        initialRouteName: 'Login',
        cardStyle: {backgroundColor: '#1F282D'},
    });

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: AuthNavigator,
        App: AppNavigator,
    },

    {
        initialRouteName: 'AuthLoading',
        cardStyle: {backgroundColor: '#1F282D'},
    },
));

export default class App extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                    <AppContainer/>
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
