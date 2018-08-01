import { AsyncStorage } from "react-native"
import { createDeck, createCard } from '../utils/helpers';

export const LOAD_DECKS = 'DECKS_LOAD_DECKS';
export const ADD_DECK = 'DECKS_ADD_DECK';
export const ADD_CARD = 'DECKS_ADD_CARD';

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

export const addNewDeck = (name) => {
    let newDeck = createDeck(name);
    return setAddDeck(newDeck)
}

export const retreiveLoadDecks = () => (dispatch) => {
    AsyncStorage.getItem('decks')
        .then(decks => dispatch(setLoadDecks(decks)))
}

export const addNewCard = (deckId, card) => {
    let newCard = createCard(card.text, card.answer)
    return setAddCard(deckId, newCard)
}

