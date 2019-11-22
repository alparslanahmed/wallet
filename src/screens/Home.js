import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../redux/actions/LoginActions';

class HomeScreen extends React.Component {

    componentDidMount() {
    }

    render() {

        !this.props.credentials ? this.props.navigation.navigate('Auth') : '';

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    onPress={this.props.logout}
                    title="Logout"
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        credentials: state.LoginReducer.credentials,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
