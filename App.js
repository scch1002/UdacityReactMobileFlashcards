import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { setLocalNotification } from './utils/helpers'
import reducer from './reducers';
import AppWrapper from './appWrapper'
import { HomeTabView } from './components/home'
import DeckDetails from './components/deckDetails'
import AddCard from './components/addCard'
import Quiz from './components/quiz'


const store = createStore(reducer, 
    compose(applyMiddleware( Thunk )));

const StackNavigationView = createStackNavigator({
  Home: {
    screen: HomeTabView
  },
  DeckDetails: {
    screen: DeckDetails
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <AppWrapper>
          <View style={styles.container}>
            <StackNavigationView />
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
