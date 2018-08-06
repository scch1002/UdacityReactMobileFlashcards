import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'

class DecksList extends Component
{ 
    render(){
    return (    
        <FlatList
            data={this.props.decks}
            renderItem={(deck) => { 
                return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails', { deckId: deck.item.id })}>
                    <View style={{backgroundColor: 'white'}}>
                        <Text>{deck.item.name}</Text>
                        <Text>{`${deck.item.cards.length} cards`}</Text>
                    </View>
                </TouchableOpacity>)
                }}
        />)}
}

export default connect(({decks}) => ({ decks: Object.values(decks) }))(DecksList)