import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../redux/actions/LoginActions';
import styles from '../styles/home';
import Transaction from '../components/Transaction';

const DATA = [
    {
        id: 1,
        title: 'Freelance Work',
        date: '2019-11-22 20:30:27',
        amount: 300,
    },
    {
        id: 2,
        title: 'Shopping',
        date: '2019-11-22 20:30:27',
        amount: -400,
    },
    {
        id: 3,
        title: 'Salary',
        date: '2019-11-22 20:30:27',
        amount: 12000,
    },
    {
        id: 4,
        title: 'Rent',
        date: '2019-11-22 20:30:27',
        amount: -450,
    },
    {
        id: 5,
        title: 'Freelance Work',
        date: '2019-11-22 20:30:27',
        amount: 300,
    },
    {
        id: 6,
        title: 'Freelance Work',
        date: '2019-11-22 20:30:27',
        amount: 300,
    },
    {
        id: 7,
        title: 'Freelance Work',
        date: '2019-11-22 20:30:27',
        amount: 300,
    },
    {
        id: 8,
        title: 'Freelance Work',
        date: '2019-11-22 20:30:27',
        amount: 300,
    },
    {
        id: 9,
        title: 'Freelance Work',
        date: '2019-11-22 20:30:27',
        amount: 300,
    },
    {
        id: 10,
        title: 'Freelance Work',
        date: '2019-11-22 20:30:27',
        amount: 300,
    },
    {
        id: 11,
        title: 'Freelance Work',
        date: '2019-11-22 20:30:27',
        amount: 300,
    },
];


class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        !this.props.credentials ? this.props.navigation.navigate('Auth') : '';

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.topWrapper}>
                    <Text style={styles.hero}>Dashboard</Text>
                    <Text style={styles.title}>Current Balance</Text>
                    <Text style={styles.balance}>3230 USD</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={{...styles.title, ...styles.green}}>Income</Text>
                            <Text style={styles.text}>5230 USD</Text>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <Text style={{...styles.title, ...styles.red}}>Expense</Text>
                            <Text style={styles.text}>2000 USD</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomWrapper}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={{...styles.title, marginBottom: 20}}>This Month</Text>
                        </View>
                        <View>
                            <Text style={{...styles.title, ...styles.green}}
                                  onPress={this.props.navigation.navigate.bind(this, 'Transactions')}>Show All</Text>
                        </View>
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Transaction title={item.title} date={item.date} amount={item.amount}/>}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View></View>
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
