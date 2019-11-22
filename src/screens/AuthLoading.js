import React from 'react';

import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';

import {AsyncStorage} from 'react-native';
import {loginSuccess} from '../redux/actions/LoginActions';
import {connect} from 'react-redux';

class AuthLoading extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const credentials = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(credentials ? 'App' : 'Auth');
        this.props.updateCredentials(credentials);
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCredentials: (credentials) => dispatch(loginSuccess(credentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
