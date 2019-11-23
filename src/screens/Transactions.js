import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import SmoothPicker from 'react-native-smooth-picker';
import styles from '../styles/transactions';
import moment from 'moment';
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


class TransactionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Transactions',
    };

    constructor(props) {
        super(props);

        this.state = {
            selected: parseInt(moment().format('DD')),
        };
    }

    componentDidMount() {
    }

    daySelect(index) {
        this.setState({selected: index + 1});
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{...styles.number, marginBottom: 10, marginTop: 20}}>{moment().format('MMMM')}</Text>
                    <SmoothPicker
                        offsetSelection={40}
                        magnet
                        scrollAnimation
                        initialScrollToIndex={this.state.selected - 1}
                        data={Array.from({length: moment().endOf('month').format('DD')}, (_, i) => i)}
                        horizontal={true}
                        bounces={true}
                        onSelected={({item, index}) => this.daySelect(index)}
                        renderItem={({item, index}) => (
                            <View style={styles.selected}>
                                <Text
                                    style={{
                                        ...((index + 1) === this.state.selected ? styles.text : styles.number),
                                    }}>{item + 1}</Text>
                            </View>
                        )}
                    />
                </View>
                <View style={{flex: 5, width: '100%', padding: 20}}>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Transaction title={item.title} date={item.date} amount={item.amount}/>}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);
