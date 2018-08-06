import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, Button } from 'react-native'

class DeckDetails extends Component {
    render() {
        let deck = this.props.decks[this.props.navigation.state.params.deckId]
        return (
            <View>
                <Text>{deck.name}</Text>
                <Text>{`${deck.cards.length} cards`}</Text>
                <Button title="Add Card"></Button>
                <Button title="Start Quiz"></Button>
            </View>)
    }
}

export default connect(({decks}) => ({decks}))(DeckDetails)