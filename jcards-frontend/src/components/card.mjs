/* This module provides functionality for creating
 * and manipulating card objects.
 */

/* Creates and returns card with contents of frontSide, backSide. */
function createCard(english, notes1, japanese, kana, romaji, notes2) {
	return {
		"frontSide": {
			"english": english,
			"notes1": notes1
		},

		"backSide": {
			"japanese": japanese,
			"kana": kana,
			"romaji": romaji,
			"notes2": notes2
		}
	};

}

function editCard() {

}


export {createCard, editCard};