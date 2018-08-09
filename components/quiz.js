import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { styles } from './styles'
import { Button } from './button'

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
                <View style={styles.container}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', fontSize: 35 }}>Quiz Complete</Text>
                        <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', fontSize: 35 }}>{`Score: ${this.state.score}/${deck.cards.length}`}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Button title="Restart Quiz" onPress={this.restartQuiz}></Button>
                        <Button title="Back to Deck" onPress={this.backToDeck}></Button>
                    </View>                     
                </View>
            )
        } 
        let card = deck.cards[this.state.currentCard]
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', fontSize: 20 }}>{`Current Card: ${this.state.currentCard + 1} of ${deck.cards.length}`}</Text>
                </View>
                <View style={{flex: 2}}>
                    { this.state.showAnswer ? 
                        <Fragment>
                            <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', fontSize: 35 }}>Answer:</Text>
                            <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', fontSize: 35 }}>{card.answer}</Text>
                        </Fragment> :
                        <Fragment>
                            <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', fontSize: 35 }}>Question:</Text>
                            <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', fontSize: 35 }}>{card.text}</Text>
                        </Fragment>                       
                    }
                </View>
                <View style={{flex: 2, justifyContent: 'flex-end'}}>
                    <Button title={this.state.showAnswer ? 'Hide Answer' : 'Show Answer'} onPress={this.toggleAnswer}></Button>
                    <Button title="Correct" onPress={this.answerCorrect} />
                    <Button title="Incorrect" onPress={this.answerInCorrect} />
                </View>
            </View>
        )
    }
}

export default connect(({ decks }) => ({ decks }))(Quiz)