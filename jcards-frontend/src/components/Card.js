import {React, useState, useEffect} from 'react';

function Card(props) {

	/* 
	 * shift -> margin shift for card used to display a dynamic spread of a deck 
	 *
	 */

	let shift = 0;
	
	if (props.shift !== undefined)
		shift= props.shift;

	let cardShift = {
		marginRight: shift + 'px'
	};

	console.log(props.card);

	return(
		<div class="card" style= {cardShift} >
			<div class="card-frontside">
				{props.card.frontSide.english}	
			</div>
		</div>
	);
}

export default Card;