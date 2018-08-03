import { AsyncStorage } from "react-native"

export const DECK_INDEX = 'deckIds'

export async function initialStorageCheck() {
    var deckIndex = await AsyncStorage.getItem(DECK_INDEX)
    if (deckIndex === null) {
        await AsyncStorage.setItem(DECK_INDEX, [])
     }
}