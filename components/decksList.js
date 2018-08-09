import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

class DecksList extends Component
{ 
    render(){
        debugger
        if(this.props.decks.length === 0) {
            return (
                <View style={[styles.container, {flex: 1, justifyContent: 'center'}]}>
                    <Text style={[styles.mediumLabel, { textAlign: 'center'}]}>No decks have been created yet.</Text>
                </View>)
        }
        debugger
        return (    
            <FlatList
                style={styles.container}
                data={this.props.decks}
                renderItem={(deck) => { 
                    return (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails', { deckId: deck.item.id })}>
                        <View style={{backgroundColor: 'white'}}>
                            <Text style={[styles.mediumLabel, { textAlign: 'center'}]} >{deck.item.name}</Text>
                            <Text style={{ textAlign: 'center', marginBottom: 10, fontWeight: 'bold', fontSize: 16 }}>{`${deck.item.cards.length} cards`}</Text>
                        </View>
                    </TouchableOpacity>)
                    }}
                keyExtractor={(item, index) => index.toString()}
            />)
    }
}

export default connect(({decks}) => ({ decks: Object.values(decks) }))(DecksList)