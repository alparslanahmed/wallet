const initialState = {
    registered: false,
};

const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS': {
            return {
                ...state,
                registered: true,
            };
        }

        case 'REGISTER_CLEAR':
            return {
                ...state,
                registered: false,
            };

        default: {
            return state;
        }
    }
};

export default RegisterReducer;
