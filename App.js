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
import { styles } from './components/styles'

const store = createStore(reducer, 
    compose(applyMiddleware( Thunk )));

const navigationOptions = (title) => ({
  title,
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
})

const StackNavigationView = createStackNavigator({
  Home: {
    screen: HomeTabView,
    navigationOptions: { ...navigationOptions('Home'), header: null}
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: navigationOptions('Deck')
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: navigationOptions('Add Card')
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: navigationOptions('Quiz')
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
