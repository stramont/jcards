/* This module provides functionality for creating and manipulating deck
 * objects.
 */

/* Generates random 9 digit share codes */
function codeGen() {
    let r = Math.ceil(Math.random() * 1000000000);

   /* while(usedCodes.includes(r)) 
     *   r = Math.ceil(Math.random() * 1000000000);
   *
   * usedCodes.push(r);
   */
    return r;
}

/* Returns an empty deck (remember to generate deck ID!)*/
function createDeck() {
	return {
		"shareCode": 20,
		"image": "",
		"created": new Date(),
		"title": "",
		"anki": false,
		"ankiDate": "",

		"cards": []
	};
}

function finalizeDeckCreation(deck, title, image) {
	deck.image = image;
	deck.title = title;

	return deck;
}

/* Returns deck with card added */
function addToDeck(deck, newCard) {
	deck.cards.unshift(newCard);

	return deck;
}

/* Returns deck with card removed */
function removeFromDeck(deck, card) {

}

function shuffle(deck) {

}

function flipCards(deck) {
	deck.cards.forEach(elt => {
		let tempBack = elt.backSide;

		elt.backSide = elt.frontSide;
		elt.frontSide = tempBack;
	});	

	return deck;
}

function startAnki(deck) {

}


export {createDeck, addToDeck, removeFromDeck, shuffle, flipCards, startAnki};