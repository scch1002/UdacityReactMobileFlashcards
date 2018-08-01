import { LOAD_DECKS } from '../actions/decks';

export default function decks(state = {}, action) {
    switch(action.type) {
        case LOAD_DECKS: 
            return {};
        default:
            return state;
    }
}