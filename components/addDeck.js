import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, TextInput } from 'react-native'
import { addNewDeck } from '../actions/decks'
import { styles } from './styles'
import { Button } from './button'

class AddDeck extends Component {
    state = {
        deckTitle: ''
    }
    addDeck = () => {
        this.props.dispatch(addNewDeck(this.state.deckTitle, (deckid) => 
        { 
            this.props.navigation.navigate('Decks')
            this.props.navigation.navigate('DeckDetails', { deckId: deckid })
        }))
    }
    render() {
        return (
            <View style={styles.container}>
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