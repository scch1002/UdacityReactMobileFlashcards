import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import { addNewCard } from '../actions/decks'
import { Button } from './button'

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
                <View style={{flex: 3}}>
                    <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 20 }}>Question:</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
                        onChangeText={(question) => this.setState({question})}
                        value={this.state.question}
                    />
                    <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 20 }}>Answer:</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
                        onChangeText={(answer) => this.setState({answer})}
                        value={this.state.answer}
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Button title="Submit" onPress={this.addCard}></Button>
                </View>
            </View>
        )
    }
}

export default connect()(AddCard)