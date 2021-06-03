import {React, useState, useEffect} from 'react';
import './Home.css';
import Deck from "./Deck.js";



const tempDeck = [
    {
        "image": "",
        "title": "",
        "created": new Date(),
        "anki": false,
        "ankiDate": "",
        "shareCode": "1"
    },
    {
        "image": "",
        "title": "Deck 2",
        "created": new Date(),
        "anki": false,
        "ankiDate": new Date(),
        "shareCode": 6
    },
    {
        "image": "",
        "title": "Deck 3",
        "created": new Date(),
        "anki": true,
        "ankiDate": new Date(),
        "shareCode": 6
    }
];


function displayDeck() {
    const displayArr = [];
    tempDeck.forEach(e => displayArr.push(<Deck 
        image = {e.image}
        title = {e.title}
        created = {e.created}
        anki = {e.anki}
        ankiDate = {e.ankiDate}
        shareCode = {e.shareCode}
    />));

    return displayArr;
}

function SavedDecks(props) {

    return (
        <div class="page-content">
            {displayDeck()}
        </div>
    );

}

export default SavedDecks;