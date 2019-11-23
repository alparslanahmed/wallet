import React from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/auth';
import {submitLogin} from '../redux/actions/LoginActions';
import {submitRegister} from '../redux/actions/RegisterActions';

class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            name: '',
        };
    }

    register() {
        if (!this.state.name || !this.state.email || !this.state.password) {
            return false;
        }

        if (this.state.password !== this.state.password_confirmation) {
            Alert.alert('Error!', 'The passwords you entered doesnt match.');
            this.input3.clear();
            this.input4.clear();
            this.input3.focus();
        }

        this.props.submitRegister(this.state.name, this.state.email, this.state.password);
    }

    render() {
        this.props.registered ? this.props.navigation.navigate('Login') : '';

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.header}>Register</Text>
                <View style={styles.inputs}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} textContentType={'emailAddress'} autoCompleteType={'name'}
                               keyboardType={'email-address'}
                               onSubmitEditing={() => {
                                   this.input2.focus();
                               }}
                               blurOnSubmit={false}
                               onChangeText={(name) => this.setState({name})}
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} textContentType={'emailAddress'} autoCompleteType={'email'}
                               keyboardType={'email-address'}
                               onSubmitEditing={() => {
                                   this.input3.focus();
                               }}
                               blurOnSubmit={false}
                               onChangeText={(email) => this.setState({email})}
                               autoCapitalize={'none'}
                               ref={(input) => {
                                   this.input2 = input;
                               }}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        textContentType={'password'}
                        onSubmitEditing={() => {
                            this.input4.focus();
                        }}
                        blurOnSubmit={false}
                        autoCompleteType={'password'}
                        ref={(input) => {
                            this.input3 = input;
                        }}
                        onChangeText={(password) => this.setState({password})}
                        autoCapitalize={'none'}
                    />
                    <Text style={styles.label}>Password Again</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        textContentType={'password'}
                        onSubmitEditing={this.register.bind(this)}
                        autoCompleteType={'password'}
                        ref={(input) => {
                            this.input4 = input;
                        }}
                        onChangeText={(password_confirmation) => this.setState({password_confirmation})}
                        autoCapitalize={'none'}
                    />
                </View>

                <TouchableOpacity onPress={this.register.bind(this)}>
                    <LinearGradient colors={['#47b6ff', '#394ee8']} style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <Text onPress={this.props.navigation.navigate.bind(this, 'Login')} style={styles.link}>Login</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registered: state.RegisterReducer.registered,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitRegister: (name, email, password) => dispatch(submitRegister(name, email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

