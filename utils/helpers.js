import uuidv4 from 'uuid/v4'; 

export function createDeck(name) {
    return {
        id: uuidv4(),
        name: name,
        cards: []
    };
}

export function createCard(cardText, cardAnswer) {
    return {
        id: uuidv4(),
        text: cardText,
        answer: cardAnswer
    };
}
