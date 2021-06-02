import {React, useState, useEffect} from 'react';
import "./Home.css";

function Deck(props) {
    /* Props: 
    * image -> image on deck
    * created -> date deck was created
    * title -> title given to deck by user
    * ankiStart -> date anki was started on
    * shareCode -> code used to share deck with others
    * addDeck -> boolean that determines whether specified deck is the 'add deck' button
    */

    const [img, setImg] = useState(0);

    return (
        <div class="deck">
                deck
        </div>
    );
}

export default Deck;