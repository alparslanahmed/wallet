import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

class CreateTransactionScreen extends React.Component {
    static navigationOptions = {
        title: 'Create Transaction',
    };

    componentDidMount() {
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Create Transaction</Text>
                <Button onPress={this.props.navigation.navigate.bind(this, 'Home')} title={'Home'}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateTransactionScreen);
