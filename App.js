import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

const DeckViewTab = createMaterialTopTabNavigator({
  Decks: {
    screen: () => (<Text>Decks</Text>),
    navigationOptions: {
      tabBarLabel: 'Decks'
    },
  },
  AddDeck: {
    screen: () => (<Text>AddDeck</Text>),
    navigationOptions: {
      tabBarLabel: ' Add Deck'
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <DeckViewTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
