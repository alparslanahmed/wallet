
const initialState = {
    credentials: null,
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                credentials: action.payload,
            };
        }

        case 'LOGOUT_SUCCESS': {

            return {
                ...state,
                credentials: null,
            };
        }

        default: {
            return state;
        }
    }
};

export default LoginReducer;
