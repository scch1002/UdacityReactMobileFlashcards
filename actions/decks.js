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
    let newDeck = createDeck(name);
    AsyncStorage.getItem(DECK_INDEX)
        .then(deckIds => {
            deckIds.push(newDeck.id)
            AsyncStorage.multiSet([[newDeck.id, newDeck],[DECK_INDEX, deckIds]])
                .then(() => {
                    dispatch(setAddDeck(newDeck))
                })
        })
}

export const retreiveLoadDecks = () => (dispatch) => {
    AsyncStorage.getItem(DECK_INDEX)
        .then(deckIds => AsyncStorage.multiGet(deckIds)
            .then(decks => dispatch(setLoadDecks(decks))));
}

export const addNewCard = (deckId, card) => {
    let newCard = createCard(card.text, card.answer)
    AsyncStorage.GetItem(deckId)
        .then(deck => {
            deck.cards[newCard.id] = newCard
            AsyncStorage.setItem(deckId, deck)
            dispatch(setAddCard(deckId, newCard))
        })
}

