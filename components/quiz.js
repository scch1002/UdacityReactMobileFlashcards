import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, Button } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {
    state = {
        showAnswer: false,
        currentCard: 0,
        score: 0
    }
    componentDidUpdate(prevProps) { 
        let deck = this.props.decks[this.props.navigation.state.params.deckId]
        if (this.state.currentCard > deck.cards.length - 1) {
            clearLocalNotification()
                .then(setLocalNotification)
        }
    }
    toggleAnswer = () => {
        this.setState((prevState) => ({
            showAnswer: !prevState.showAnswer
        }))
    }
    answerCorrect = () => {
        this.setState((prevState) => ({
            showAnswer: false,
            score: prevState.score + 1,
            currentCard: prevState.currentCard + 1
        }))
    }
    answerInCorrect = () => {
        this.setState((prevState) => ({
            showAnswer: false,
            currentCard: prevState.currentCard + 1
        }))
    }
    restartQuiz = () => {
        this.setState({
            showAnswer: false,
            currentCard: 0,
            score: 0
        })
    }
    backToDeck = () => {
        this.props.navigation.goBack()
    }
    render() {
        let deck = this.props.decks[this.props.navigation.state.params.deckId]
        if (this.state.currentCard > deck.cards.length - 1) {
            return (
                <View>
                    <Text>Quiz Complete</Text>
                    <Text>{`Score: ${this.state.score}/${deck.cards.length}`}</Text>
                    <Button title="Restart Quiz" onPress={this.restartQuiz}></Button>
                    <Button title="Back to Deck" onPress={this.backToDeck}></Button>                     
                </View>
            )
        } 
        let card = deck.cards[this.state.currentCard]
        return (
            <View>
                { this.state.showAnswer ? 
                    <Text>{card.text}</Text> :
                    <Text>{card.answer}</Text>
                }
                <Button title={this.state.showAnswer ? 'Hide Answer' : 'Show Answer'} onPress={this.toggleAnswer}></Button>
                <Button title="Correct" onPress={this.answerCorrect} />
                <Button title="InCorrect" onPress={this.answerInCorrect} />
            </View>
        )
    }
}

export default connect(({ decks }) => ({ decks }))(Quiz)