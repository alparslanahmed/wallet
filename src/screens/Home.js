import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../redux/actions/LoginActions';
import styles from '../styles/home';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },

    {
        id: '58694a0f-3da1-asd-bd96-145571e29d72',
        title: 'Third Item',
    },

    {
        id: '58694a0f-3da1-dsa-bd96-145571e29d72',
        title: 'Third Item',
    },

    {
        id: '58694a0f-3da1-aaa-bd96-145571e29d72',
        title: 'Third Item',
    },

    {
        id: '58694a0f-3da1-47vvv1f-bd96-145571e29d72',
        title: 'Third Item',
    },

    {
        id: '58694a0f-3da1-471xxxf-bd96-145571e29d72',
        title: 'Third Item',
    },

    {
        id: '58694a0f-3da1-zzz-bd96-145571e29d72',
        title: 'Third Item',
    },
];

function Item({title}) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

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
                            <Text style={{...styles.title, ...styles.green}}>Show All</Text>
                        </View>
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Item title={item.title}/>}
                        keyExtractor={item => item.id}
                    />
                </View>
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
