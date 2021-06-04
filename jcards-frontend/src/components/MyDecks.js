import {React, useState, useEffect} from 'react';
import './Home.css';
import Deck from "./Deck.js";


const usedCodes = [];

const tempDeck = [
    {
        "image": "",
        "title": "Create a new deck",
        "created": new Date(),
        "anki": true,
        "ankiDate": new Date(),
        "shareCode": "0"
    },
    {
        "image": "",
        "title": "Deck 2",
        "created": new Date(),
        "anki": false,
        "ankiDate": new Date(),
        "shareCode": codeGen()
    },
    {
        "image": "",
        "title": "Deck 3",
        "created": new Date(),
        "anki": true,
        "ankiDate": new Date(),
        "shareCode": codeGen()
    },
    {
        "image": "",
        "title": "Deck 4",
        "created": new Date(),
        "anki": false,
        "ankiDate": new Date(),
        "shareCode": codeGen()
    },
    {
        "image": "",
        "title": "Deck 5",
        "created": new Date(),
        "anki": true,
        "ankiDate": new Date(),
        "shareCode": codeGen()
    },
    {
        "image": "",
        "title": "Deck 6",
        "created": new Date(),
        "anki": true,
        "ankiDate": new Date(),
        "shareCode": codeGen()
    },
    {
        "image": "",
        "title": "Deck 7",
        "created": new Date(),
        "anki": true,
        "ankiDate": new Date(),
        "shareCode": codeGen()
    }

];


/*Generates 9 digit random share code */
function codeGen() {
    let r = Math.ceil(Math.random() * 1000000000);

    while(usedCodes.includes(r)) 
        r = Math.ceil(Math.random() * 1000000000);

    usedCodes.push(r);
    return r;
}

function displayDeck(props) {
    const displayArr = [];
    tempDeck.forEach(e => displayArr.push(<Deck 
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