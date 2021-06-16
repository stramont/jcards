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

function testDeckOne() {
	let deck = createDeck();

	addToDeck(deck, createCard("Go", "", "行く；行きます；行って", "いく；いきます", "iku; ikimasu", "This verb has irregular -te form (itte)"));
	addToDeck(deck, createCard("Famous", "Noun", "", "ゆうめい", "", "-na noun"));
	addToDeck(deck, createCard("Textbook", "Noun", "", "", "kyoukasho", ""));
	addToDeck(deck, createCard("Kyushu", "Third largest island of Japan's main islands", "九州", "きゅうしゅう", "kyuushuu", "Literal meaning: Nine Provinces"));

	deck.title ="Test Deck One";

	return deck;
}

export {createTestDeck, testDeckOne};