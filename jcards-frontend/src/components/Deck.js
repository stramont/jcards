import {React, useState, useEffect} from 'react';
import "./Home.css";

function Deck(props) {
    /* Props: 
    * image -> image on deck
    * title -> title given to deck by user
    * created -> date deck was created
    * anki -> boolean for if anki practice was started
    * ankiDate -> date anki was started on
    * shareCode -> code used to share deck with others
    */

    const [img, setImg] = useState(0);
    const [pageSetNum, setPageSetNum] = useState(0);

    function ankiDateDisplay() {
        if (props.anki) {
            return (
                <p>Anki started: {props.ankiDate.getMonth()+1}/{props.ankiDate.getDate()}/{props.ankiDate.getFullYear()}</p>
            )
        }
    }

    function deckDisplay() {
        if (props.shareCode === "0") { /*This is the 'add deck' button*/
            if (pageSetNum !== 4)
                setPageSetNum(4);

            return (
                <div class="deck-inner">
                    <img src="add_deck.png" alt="add deck" height="150" width="150"/>
                    <h1>Add Deck</h1>
                </div>
            );
        }
        else if (props.shareCode === "1") { /* Enter deck code button */

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

            if (props.image === "")
               img = "default_deck.png"
            else
                img = props.image;

            return (
                <div class="deck-inner">
                    <img class="deck-image" src={img} alt="deck image" height="150" width="150"/>
                    <div class="deck-inner-text">
                        <h2>{props.title}</h2>
                        <p>Created: {props.created.getMonth() + 1}/{props.created.getDate()}/{props.created.getFullYear()}</p>
                        {ankiDateDisplay()}
                        <p class="sharecode-p">Share Code: {props.shareCode}</p>
                    </div>
                </div>
            );
        }
    }

    return (
        <div class="deck" onClick={() => props.pageSetter(pageSetNum)}>
                {deckDisplay()}
        </div>
    );
}

export default Deck;