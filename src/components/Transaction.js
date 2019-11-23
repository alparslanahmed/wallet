import {Text, View} from 'react-native';
import styles from '../styles/home';
import React from 'react';

export default function Transaction({title, date, amount}) {
    return (
        <View style={styles.item}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.title}>{date}</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{...styles.text, ...(amount > 0 ? styles.green : styles.red)}}>{amount}</Text>
                </View>
            </View>
        </View>
    );
}
