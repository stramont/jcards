import React from 'react';
import CardCreation from './CardCreation.js';

function DeckCreation(props) {

    return (
        <div class="page-content">
            <div class="deck-creation-top">
                <form>
                    <label>
                        Enter a title: <br></br>
                        <input class="deck-title-input" placeholder="Example: 'Chapter 1 nouns'" type="text" />
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
                <CardCreation />
            </div>
            <div class="deck-creation-bottom">
                <button class="create-deck-btn">Create Deck!</button>
            </div>
        </div>
    );
}

export default DeckCreation;