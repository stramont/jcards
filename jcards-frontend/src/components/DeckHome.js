import React from 'react';
import Card from './Card.js';

function DeckHome(props) {
	/* Props:
	 * currDeck -> The current deck
	 * 
	 * 
	 */ 

	function displayDeckSpread() {
		let displayArr = [];
		let shift = 0;
		
		let spreadLength = 200;
		if (props.currDeck.cards.length < 200) 
			spreadLength = props.currDeck.cards.length;

		for (let i = 0; i < spreadLength; i++) {
			displayArr.push(<Card card={props.currDeck.cards[i]} shift={shift} />);
			shift++;
		}
		return displayArr;
	}

	return(
		<div class="page-content">
			<div class="card-container">
				<div class="anki-stats">
					<h1>Anki Stats: </h1><br></br>
					New: {props.ankiNew} <br></br>
					Learning: {props.ankiLearning} <br></br>
					Reviewing: {props.ankiReviewing} <br></br>

				</div>
				<button class="deck-home-btn flip-cards-btn">Flip Cards</button>
				{displayDeckSpread()}
				<button class="deck-home-btn practice-cards-btn">Practice</button>
				<button class="deck-home-btn start-anki-btn">Start anki study</button>
				<button class="deck-home-btn resume-anki-btn">Resume anki study</button>
			</div>
		</div>
	)
}

export default DeckHome;