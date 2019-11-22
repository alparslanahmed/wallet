import {Alert} from 'react-native';

export default store => next => action => {

    if (action.type === 'ALERT_ERROR') {
        Alert.alert(
            'Error!',
            action.payload,
        );
    }

    if (action.type === 'ALERT_SUCCESS') {
        Alert.alert(
            'Success!',
            action.payload,
        );
    }

    next(action);
};
