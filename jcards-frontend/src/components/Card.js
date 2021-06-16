import {React, useState, useEffect} from 'react';

function Card(props) {

	/* 
	 * shift -> margin shift for card used to display a dynamic spread of a deck 
	 * card -> The card object containing the contents of the card
	 * flipped -> If false, frontSide of card will display.  If true, backSide will display
	 */

	let shift = 0;
	
	if (props.shift !== undefined)
		shift= props.shift;

	let cardShift = {
		marginRight: shift + 'px'
	};

//	console.log(props.card);

	function optionalContent(contentName) {
		let card = props.card;

		if (contentName === "notes1")
			return (card.frontSide.notes1 === "" ? '' : <p class="frontside-notes">Note: {card.frontSide.notes1}</p>);
		else if(contentName === "japanese")
			return (card.backSide.japanese === "" ? '' : <p class="backside-japanese">{card.backSide.japanese}</p>);
		else if (contentName === "kana")
			return (card.backSide.kana === "" ? '' : <p class="backside-kana">{card.backSide.kana}</p>);
		else if (contentName === "romaji")	
			return (card.backSide.romaji === "" ? '' : <p class="backside-romaji">{card.backSide.romaji}</p>);
		else if (contentName === "notes2")	
			return (card.backSide.notes2 === "" ? '' : <p class="backside-notes">Note: {card.backSide.notes2}</p>);
		else
			console.log("Bad contentName: " + contentName);
	}

	function displayContent() {
		if (props.flipped) {
			return (
				<div class="card-backside">
					{optionalContent("japanese")}
					{optionalContent("kana")}
					{optionalContent("romaji")}
					{optionalContent("notes2")}
				</div>
			);
		}
		else {
			return (<div class="card-frontside">
				<p class="frontside-english">{props.card.frontSide.english}</p>
				{optionalContent("notes1")}
			</div>);
		}
	}

	return(
		<div class="card" style= {cardShift} >
			{displayContent()}
		</div>
	);
}

export default Card;