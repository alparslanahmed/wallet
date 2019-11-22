import {Alert} from 'react-native';

export default store => next => action => {

    if (action.type === 'LOGIN_ERROR') {
        Alert.alert(
            'Login Error!',
            action.payload,
        );
    }

    next(action);
};
