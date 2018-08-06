import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import reducer from './reducers';
import AppWrapper from './appWrapper'
import { HomeTabView } from './components/home'

const store = createStore(reducer, 
    compose(applyMiddleware( Thunk )));

const StackNavigationView = createStackNavigator({
  Home: {
    screen: HomeTabView
  },
  DeckDetails: {
    screen: (props) => (<Text>DeckDetails</Text>)
  }
})

export default class App extends React.Component {
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
