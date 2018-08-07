import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Button } from './button'

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
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', fontSize: 25 }}>{deck.name}</Text>
                <Text style={{ textAlign: 'center', marginBottom: 10, fontWeight: 'bold', fontSize: 16 }}>{`${deck.cards.length} cards`}</Text>
                <Button onPress={this.addCard} title='Add Card'></Button>
                <Button onPress={this.takeQuiz} title='Start Quiz'></Button>
            </View>)
    }
}

export default connect(({decks}) => ({decks}))(DeckDetails)