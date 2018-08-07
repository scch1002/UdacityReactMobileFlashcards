import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const Button = (props) => (
    <TouchableOpacity style={{
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        padding: 20,
        alignItems: 'center'
    }} onPress={props.onPress}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 25 }}>
            {props.title}
        </Text>
    </TouchableOpacity>
);