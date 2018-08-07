import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, Button } from 'react-native'

class DeckDetails extends Component {
    addCard = () => {
        this.props.navigation.navigate('AddCard', { deckId: this.props.navigation.state.params.deckId })
    }
    takeQuiz = () => {
        this.props.navigation.navigate('Quiz', { deckId: this.props.navigation.state.params.deckId })
    }
    render() {
        let deck = this.props.decks[this.props.navigation.state.params.deckId]
        return (
            <View>
                <Text>{deck.name}</Text>
                <Text>{`${deck.cards.length} cards`}</Text>
                <Button title="Add Card" onPress={this.addCard}></Button>
                <Button title="Start Quiz" onPress={this.takeQuiz}></Button>
            </View>)
    }
}

export default connect(({decks}) => ({decks}))(DeckDetails)