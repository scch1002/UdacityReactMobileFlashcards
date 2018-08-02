import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import reducer from './reducers';
import AppWrapper from './appWrapper'
import { DecksList } from './components/decksList'

const store = createStore(reducer, 
    compose(applyMiddleware( Thunk )));


const DeckViewTab = createMaterialTopTabNavigator({
  Decks: {
    screen: DecksList,
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
        <AppWrapper>
          <View style={styles.container}>
            <DeckViewTab />
          </View>
        </AppWrapper>
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
