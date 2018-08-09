import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

class DecksList extends Component
{ 
    render(){
    return (    
        <FlatList
            style={styles.container}
            data={this.props.decks}
            renderItem={(deck) => { 
                return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails', { deckId: deck.item.id })}>
                    <View style={{backgroundColor: 'white'}}>
                        <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', fontSize: 25 }} >{deck.item.name}</Text>
                        <Text style={{ textAlign: 'center', marginBottom: 10, fontWeight: 'bold', fontSize: 16 }}>{`${deck.item.cards.length} cards`}</Text>
                    </View>
                </TouchableOpacity>)
                }}
        />)}
}

export default connect(({decks}) => ({ decks: Object.values(decks) }))(DecksList)