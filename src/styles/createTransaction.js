import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'Heebo-Regular',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'stretch',
        width: '100%',
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    right: {
        alignSelf: 'stretch',
        flex: 1,
        alignItems: 'flex-end',
        paddingLeft: 20,
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#3a3a3a',
        textAlign: 'right',
        color: '#FFFFFF'
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
        textAlign: 'center',
        color: 'white',
        margin: 5,
    },
});
