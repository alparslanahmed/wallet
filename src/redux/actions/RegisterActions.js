import axios from 'axios';
import environment from '../../environment';
import {alertError, alertSuccess} from './MainActions';

export const submitRegister = (name, email, password) => {
    return dispatch => {
        axios.post(environment.serverUrl + '/api/register', {name, email, password})
            .then(res => {
                dispatch(alertSuccess('You are registered successfully.'));
                dispatch(registerSuccess());

                setTimeout(() => {
                    dispatch(registerClear());
                }, 1000);

            }).catch(err => {
                dispatch(alertError(err.response.data.message));
            },
        );
    };
};

export const registerSuccess = () => ({
    type: 'REGISTER_SUCCESS',
});

export const registerClear = () => ({
    type: 'REGISTER_CLEAR',
});

