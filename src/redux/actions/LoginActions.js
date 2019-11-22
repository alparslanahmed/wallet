import axios from 'axios';
import environment from '../../environment';
import {AsyncStorage} from 'react-native';

export const submitLogin = (email, password) => {
    return dispatch => {
        axios.post(environment.serverUrl + '/oauth/token', {
            username: email,
            password,
            grant_type: 'password',
            scope: '*',
            client_id: environment.client_id,
            client_secret: environment.client_secret,
        })
            .then(res => {
                AsyncStorage.setItem('token', res.data.access_token).then(() => {
                    dispatch(loginSuccess(res.data));
                });
            }).catch(err => {
                dispatch(loginError('Please check your credentials.'));
            },
        );
    };
};

export const logout = () => {
    return dispatch => {
        AsyncStorage.removeItem('token').then(() => {
            dispatch(logoutSuccess());
        });
    };
};

export const loginSuccess = (credentials) => ({
    type: 'LOGIN_SUCCESS',
    payload: credentials,
});

export const logoutSuccess = () => ({
    type: 'LOGOUT_SUCCESS',
});

export const loginError = (err) => ({
    type: 'LOGIN_ERROR',
    payload: err,
});
