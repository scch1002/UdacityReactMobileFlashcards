import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, Button, TextInput } from 'react-native'
import { styles } from './styles'
import { addNewCard } from '../actions/decks'

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    addCard = () => {
        this.props.dispatch(addNewCard(this.props.navigation.state.params.deckId, {
            text: this.state.question,
            answer: this.state.answer
        }))
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Question:</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                />
                <Text>Answer:</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                />
                <Button title="Submit" onPress={this.addCard}></Button>
            </View>
        )
    }
}

export default connect()(AddCard)