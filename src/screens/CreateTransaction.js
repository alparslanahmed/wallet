import React from 'react';
import {View, Text, Button, TextInput, Picker, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/createTransaction';
import LinearGradient from 'react-native-linear-gradient';
import {postTransaction} from '../redux/actions/CreateTransactionActions';

const state = {
    amount: 0,
    category: -1,
    description: '',
};

class CreateTransactionScreen extends React.Component {
    static navigationOptions = {
        title: 'Create Transaction',
    };

    constructor(props) {
        super(props);

        this.state = state;
    }

    componentDidMount() {
    }

    createTransaction() {
        if (!this.state.amount || !this.state.description) {
            return false;
        }

        this.props.navigation.navigate('Home');

        this.props.postTransaction(this.state.description, this.state.amount * this.state.category);
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.text}>Amount</Text>
                    </View>
                    <View style={styles.right}>
                        <TextInput
                            style={styles.input}
                            textContentType={'none'}
                            autoCompleteType={'cc-number'}
                            keyboardType={'number-pad'}
                            onChangeText={(amount) => this.setState({amount})}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.text}>Category</Text>
                    </View>
                    <View style={styles.right}>
                        <Picker
                            selectedValue={this.state.category}
                            style={styles.input}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({category: itemValue})
                            }
                            ref={(input) => {
                                this.second = input;
                            }}
                        >
                            <Picker.Item label="Expense" value={-1}/>
                            <Picker.Item label="Income" value={1}/>
                        </Picker>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.text}>Description</Text>
                    </View>
                    <View style={styles.right}>
                        <TextInput style={styles.input}
                                   textContentType={'none'}
                                   autoCompleteType={'off'}
                                   keyboardType={'default'}
                                   onChangeText={(description) => this.setState({description})}/>
                    </View>
                </View>

                <View style={{justifyContent: 'center', padding: 20}}>
                    <TouchableOpacity onPress={this.createTransaction.bind(this)}>
                        <LinearGradient colors={['#47b6ff', '#394ee8']} style={styles.button}>
                            <Text style={styles.buttonText}>Create Transaction</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        postTransaction: (title, amount) => dispatch(postTransaction(title, amount)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTransactionScreen);
