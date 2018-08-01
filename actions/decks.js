import { AsyncStorage } from "react-native"

export const LOAD_DECKS = 'DECKS_LOAD_DECKS';

const setLoadDecks = (decks) => ({
    type: LOAD_DECKS,
    decks
});

export const retreiveLoadDecks = () => (dispatch) => {
    AsyncStorage.getItem('decks')
        .then(decks => dispatch(setLoadDecks(decks)));
};