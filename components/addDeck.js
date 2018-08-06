import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, Button, TextInput } from 'react-native'
import { addNewDeck } from '../actions/decks'

class AddDeck extends Component {
    state = {
        deckTitle: ''
    }
    addDeck = () => {
        this.props.dispatch(addNewDeck(this.state.deckTitle))
    }
    render() {
        return (
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(deckTitle) => this.setState({deckTitle})}
                    value={this.state.deckTitle}
                />
                <Button onPress={this.addDeck} title="Submit"></Button>
            </View>
        )
    }
}

export default connect()(AddDeck)