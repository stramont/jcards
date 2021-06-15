import {React, useState, useEffect} from 'react';
import './Home.css';
import Deck from "./Deck.js";



function displayDeck(props) {
    let displayArr = [];
    props.decks.forEach(e => displayArr.push(<Deck 
        deck = {e}
        pageSetter = {props.pageSetter}
        currDeckSetter = {(d) => props.currDeckSetter(d)}
    />));

    return displayArr;
}

function MyDecks(props) {

    return (
        <div class="page-content">
            {displayDeck(props)}
        </div>
    );

}

export default MyDecks;