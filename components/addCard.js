import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, Button, TextInput } from 'react-native'
import { addNewCard } from '../actions/decks'

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    addCard = () => {
        debugger
        this.props.dispatch(addNewCard(this.props.navigation.state.params.deckId, {
            text: this.state.question,
            answer: this.state.answer
        }))
    }
    render() {
        return (
            <View>
                <Text>Question:</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                />
                <Text>Answer:</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                />
                <Button title="Submit" onPress={this.addCard}></Button>
            </View>
        )
    }
}

export default connect()(AddCard)