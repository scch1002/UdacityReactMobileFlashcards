import { LOAD_DECKS, ADD_DECK, ADD_CARD } from '../actions/decks'

export default function decks(state = {}, action) {
    switch(action.type) {
        case LOAD_DECKS: 
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            debugger
            return {
                ...state,
                [action.newDeck.id]: action.newDeck
            }
        case ADD_CARD:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    cards: {
                        ...state[action.deckId].cards,
                        [action.card.id]: action.card
                    }
                }
            }
        default:
            return state
    }
}