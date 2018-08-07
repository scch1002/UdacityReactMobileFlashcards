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

export const addNewDeck = (name) => (dispatch) => {
    var newDeck = createDeck(name);
    AsyncStorage.getItem(DECK_INDEX)
        .then(deckIdsString => JSON.parse(deckIdsString))
        .then(deckIds => {
            deckIds.push(newDeck.id)
            return AsyncStorage.multiSet([[newDeck.id, JSON.stringify(newDeck)],[DECK_INDEX, JSON.stringify(deckIds)]])
        })
        .then(() => {
            dispatch(setAddDeck(newDeck))
        })
}

export const retreiveLoadDecks = () => (dispatch) => {
    AsyncStorage.getItem(DECK_INDEX)
        .then(deckIdsString => JSON.parse(deckIdsString))
        .then(deckIds => {
            if (deckIds === null) {
                return AsyncStorage.setItem(DECK_INDEX, '[]')
                    .then(() => ([]))
            } else if (deckIds.length !== 0) {
                return AsyncStorage.multiGet(deckIds) 
            }
        })
        .then(decks => {
            if (decks !== undefined && decks !== null) {
                let deckObject = {};
                for (let entry of decks) {
                    deckObject[entry[0]] = JSON.parse(entry[1])
                }
                dispatch(setLoadDecks(deckObject))
            }     
        })
}

export const addNewCard = async (deckId, card) => {
    var newCard = createCard(card.text, card.answer)
    var deck = await AsyncStorage.GetItem(deckId)
    deck.cards[newCard.id] = newCard
    await AsyncStorage.setItem(deckId, deck)
    dispatch(setAddCard(deckId, newCard))
}

