import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const Button = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={[styles.mediumLabel, { textAlign: 'center'}]}>
            {props.title}
        </Text>
    </TouchableOpacity>
);