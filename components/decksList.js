import React from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text } from 'react-native'

export const DecksList = connect(({decks}) => ({ decks: Object.values(decks) }))((props) =>
{ 
    return (    
        <FlatList
            data={props.decks}
            renderItem={(deck) => { 
                return (<View style={{backgroundColor: 'white'}}>
                    <Text>{deck.item.name}</Text>
                </View>)
                }}
        />
)
}
)