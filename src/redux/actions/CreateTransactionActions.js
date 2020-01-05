import environment from '../../environment';
import {alertError, alertSuccess} from './MainActions';
import {AsyncStorage} from 'react-native';
import store from '../store/store';
import axios from '../../axios';

export const postTransaction = (title, amount) => {

    return (dispatch) => {
        axios.post(environment.serverUrl + '/api/transaction/create', {
            title,
            amount,
        }).then(() => dispatch(alertSuccess('Transaction created.'))).catch(err => {
                dispatch(alertError(err.message));
            },
        );
    };
};
