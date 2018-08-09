import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import DecksList from './decksList'
import AddDeck from './addDeck'


export const HomeTabView = createMaterialTopTabNavigator({
    Decks: {
      screen: DecksList,
      navigationOptions: {
        tabBarLabel: 'Decks'
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck'
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'black',
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
      },
    }
  });