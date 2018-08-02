import React from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'

export const DecksList = connect(({decks}) => ({ decks: Object.values(decks) }))((props) => (    
    <FlatList
        data={props.decks}
        renderItem={(deck) => (<Text>{deck.name}</Text>)}
    />
))