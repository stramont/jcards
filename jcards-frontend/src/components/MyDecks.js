import {React, useState, useEffect} from 'react';
import './Home.css';
import Deck from "./Deck.js";



function displayDeck(props) {
    const displayArr = [];
    props.decks.forEach(e => displayArr.push(<Deck 
        image = {e.image}
        title = {e.title}
        created = {e.created}
        anki = {e.anki}
        ankiDate = {e.ankiDate}
        shareCode = {e.shareCode}
        pageSetter = {props.pageSetter}
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