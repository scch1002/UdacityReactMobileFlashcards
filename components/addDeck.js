import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, Button, TextInput } from 'react-native'

class AddDeck extends Component {
    state = {
        deckTitle: ''
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
                <Button title="Submit"></Button>
            </View>
        )
    }
}

export default connect()(AddDeck)