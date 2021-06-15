import {React, useState, useEffect} from 'react';
import "./Home.css";

function Deck(props) {
    /* Props: 
    * deck -> reference to the deck
    * pageSetter -> function to lift page state to Home
    * currDeckSetter -> function to set the global current deck to this deck
    */

    const [img, setImg] = useState(0);
    const [pageSetNum, setPageSetNum] = useState(0);

    function ankiDateDisplay() {
        if (props.deck.anki) {
            return (
                <p>Anki started: {props.deck.ankiDate.getMonth()+1}/{props.deck.ankiDate.getDate()}/{props.deck.ankiDate.getFullYear()}</p>
            )
        }
    }

    function deckDisplay() {
        if (props.deck.shareCode === "0") { /*This is the 'add deck' button*/
            if (pageSetNum !== 4)
                setPageSetNum(4);

            return (
                <div class="deck-inner">
                    <img src="add_deck.png" alt="add deck" height="150" width="150"/>
                    <h1>Add Deck</h1>
                </div>
            );
        }
        else if (props.deck.shareCode === "1") { /* Enter deck code button */

            return (
                <div class="deck-inner">
                    <img src="share_icon2.png" alt="add deck" height="150" width="150"/>
                    <h1>Enter Share Code</h1>
                </div>
            );

        }
        else {
            if (pageSetNum !== 5)
                setPageSetNum(5);

            let img = "";

            if (props.deck.image === "")
               img = "default_deck.png"
            else
                img = props.deck.image;

            return (
                <div class="deck-inner">
                    <img class="deck-image" src={img} alt="deck image" height="150" width="150"/>
                    <div class="deck-inner-text">
                        <h2>{props.deck.title}</h2>
                        <p>Created: {props.deck.created.getMonth() + 1}/{props.deck.created.getDate()}/{props.deck.created.getFullYear()}</p>
                        {ankiDateDisplay()}
                        <p class="sharecode-p">Share Code: {props.deck.shareCode}</p>
                    </div>
                </div>
            );
        }
    }

    return (
        <div class="deck" onClick={() => {props.currDeckSetter(props.deck); props.pageSetter(pageSetNum)}}>
                {deckDisplay()}
        </div>
    );
}

export default Deck;