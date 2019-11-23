import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {submitLogin} from '../redux/actions/LoginActions';
import styles from '../styles/auth';

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    login() {
        if (!this.state.email || !this.state.password) {
            return false;
        }

        this.props.submitLogin(this.state.email, this.state.password);
    }

    register() {
        this.props.navigation.navigate('Register');
    }

    render() {

        this.props.credentials ? this.props.navigation.navigate('App') : '';

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.header}>Sign In</Text>
                <View style={styles.inputs}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} textContentType={'emailAddress'} autoCompleteType={'email'}
                               keyboardType={'email-address'}
                               onSubmitEditing={() => {
                                   this.secondTextInput.focus();
                               }}
                               blurOnSubmit={false}
                               onChangeText={(email) => this.setState({email})}
                               autoCapitalize={'none'}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        textContentType={'password'}
                        onSubmitEditing={this.login.bind(this)}
                        autoCompleteType={'password'}
                        ref={(input) => {
                            this.secondTextInput = input;
                        }}
                        onChangeText={(password) => this.setState({password})}
                        autoCapitalize={'none'}
                    />
                </View>
                <TouchableOpacity onPress={this.login.bind(this)}>
                    <LinearGradient colors={['#FF2366', '#8D4DE8']} style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.register.bind(this)}>
                    <LinearGradient colors={['#47b6ff', '#394ee8']} style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </LinearGradient>
                </TouchableOpacity>
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
        submitLogin: (email, password) => dispatch(submitLogin(email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

