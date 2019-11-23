import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    header: {
        fontSize: 34,
        color: '#FFFFFF',
        fontFamily: 'Heebo-Regular',
        marginBottom: 32,
    },
    label: {
        color: '#979797',
        textAlign: 'left',
        width: '100%',
        marginBottom: 5,
        marginTop: 20,
        fontFamily: 'Heebo-Regular',
    },
    inputs: {width: '100%', padding: 20},
    input: {
        backgroundColor: '#353b40',
        width: '100%',
        color: '#FFFFFF',
        paddingRight: 10,
        paddingLeft: 10,
    },
    button: {
        width: 264,
        height: 50,
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },

    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Heebo-Regular',
    },

    link: {
        color: '#FFFFFF',
        fontFamily: 'Heebo-Regular',
        marginTop: 40,
    },
});
