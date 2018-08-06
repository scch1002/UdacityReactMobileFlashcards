import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import DecksList from './decksList'


export const HomeTabView = createMaterialTopTabNavigator({
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
