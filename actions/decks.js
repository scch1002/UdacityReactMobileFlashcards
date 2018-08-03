import { AsyncStorage } from "react-native"
import { createDeck, createCard } from '../utils/helpers';

const DECK_INDEX = 'deckIds'

export const LOAD_DECKS = 'DECKS_LOAD_DECKS'
export const ADD_DECK = 'DECKS_ADD_DECK'
export const ADD_CARD = 'DECKS_ADD_CARD'

const setAddDeck = (newDeck) => ({
    type: ADD_DECK,
    newDeck
})

const setAddCard = (deckId, card) => ({
    type: ADD_CARD,
    deckId,
    card
})

const setLoadDecks = (decks) => ({
    type: LOAD_DECKS,
    decks
})

export const addNewDeck = (name) => async (dispatch) => {
    var newDeck = createDeck(name);
    var deckIds = await AsyncStorage.getItem(DECK_INDEX)
    deckIds.push(newDeck.id)
    await AsyncStorage.multiSet([[newDeck.id, newDeck],[DECK_INDEX, deckIds]])
    dispatch(setAddDeck(newDeck))
}

export const retreiveLoadDecks = () => async (dispatch) => {
    var deckIds = await AsyncStorage.getItem(DECK_INDEX)
    debugger
    if (deckIds === null) {
        await AsyncStorage.setItem(DECK_INDEX, [])
        debugger
    } else if (deckIds.length !== 0) {
        var decks = await AsyncStorage.multiGet(deckIds) 
        dispatch(setLoadDecks(decks))
        debugger
    }
}

export const addNewCard = async (deckId, card) => {
    var newCard = createCard(card.text, card.answer)
    var deck = await AsyncStorage.GetItem(deckId)
    deck.cards[newCard.id] = newCard
    await AsyncStorage.setItem(deckId, deck)
    dispatch(setAddCard(deckId, newCard))
}

