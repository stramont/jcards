import {React, useState, useEffect} from 'react';
import CardCreation from './CardCreation.js';
import {createDeck, addToDeck, removeFromDeck, shuffle, flipCards, startAnki} from './deck.mjs';

function DeckCreation(props) {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [deck, setDeck] = useState(createDeck());


    function finalizeDeck() {
        if (title === "") {
            alert("Please enter a title");
        }
        else if (deck.cards.length === 0) {
            alert("You have not created any cards yet!"); 
        }
        else {
            deck.title = title;

            props.decks.push(deck);
            props.pageSetter(0);
        }

    }

    return (
        <div class="page-content">
            <div class="deck-creation-top">
                <form>
                    <label>
                        Enter a title: <br></br>
                        <input class="deck-title-input" placeholder="Example: 'Chapter 1 nouns'" type="text" value={title} onChange={(e) => setTitle(e.target.value) } />
                    </label>
                    <div id="image-block">
                        <label class="image-select-label">
                            Deck image (optional)<br></br>
                            <input type="file" class="deck-image-selector" accept="image/*,.pdf" />
                        </label>
                    </div>
                </form>
            </div>
            <div class="deck-creation-content">
                <CardCreation currDeck={deck} />
            </div>
            <div class="deck-creation-bottom">
                <button onClick={() => finalizeDeck()} class="create-deck-btn">Create Deck!</button>
            </div>
        </div>
    );
}

export default DeckCreation;