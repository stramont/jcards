// Various tests

import {createDeck, addToDeck, removeFromDeck, shuffle, flipCards, startAnki} from './deck.mjs';
import {createCard, editCard} from './card.mjs';

function createTestDeck(title, numCards) {
	let deck = createDeck();

	for (let i = 0; i < numCards; i++) {
		addToDeck(deck, createCard("", "", "", "", "", ""));
	}
	deck.title = title;

	return deck;

}

export {createTestDeck};