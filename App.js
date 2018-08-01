import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, 
    compose(applyMiddleware( Thunk )));


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
      <Provider store={store}>
        <View style={styles.container}>
        <DeckViewTab />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
