import {React, useState, useEffect} from 'react';
import {createCard, editCard} from './card.mjs';
import {addToDeck} from './deck.mjs';

function CardCreation(props) {
    const [engl, setEngl] = useState("");
    const [notes1, setNotes1] = useState("");
    const [japn, setJapn] = useState("");
    const [kana, setKana] = useState("");
    const [romaji, setRomaji] = useState("");
    const [notes2, setNotes2] = useState("");

    // useEffect(() => {
    //     console.log(notes2);
    // });

    function clearState() {
        setEngl("");
        setNotes1("");
        setJapn("");
        setKana("");
        setRomaji("");
        setNotes2("");
    }

    function createAndAddCard() {
        //if (engl === "")
         //   alert("Please enter an English translation, or explanation");
        //else {
            let card = createCard(engl, notes1, japn, kana, romaji, notes2);
            addToDeck(props.currDeck, card);
            clearState();
     //   }
    }

    return(
        <div class="card-creation-container">
            <button class="card-navigate-btn prev-card-btn">Prev card</button>
            <div class="template-container">
                <div class="single-side-template">
                    <h1>Front side</h1>
                    <form>
                        <label>
                            English: <br></br>
                            <input class="card-input" type="text" value={engl} onChange={(e) => setEngl(e.target.value)} />
                        </label>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <label>
                            Notes (optional): <br></br>
                            <textarea value={notes1} onChange={(e) => setNotes1(e.target.value)}>
                            </textarea>
                        </label>
                    </form>
                </div>
                <div class="single-side-template">
                    <h1>Back side</h1>
                    <form>
                        Japanese: <br></br>
                        <label>
                            <input class="card-input" type="text" value={japn} onChange={(e) => setJapn(e.target.value)}/>
                        </label>
                        <br></br>
                        <label>
                            Kana only (optional): <br></br>
                            <input class="card-input" type="text" value={kana} onChange={(e) => setKana(e.target.value)} />
                        </label>
                        <br></br>
                        <label>
                            Romaji (optional): <br></br>
                            <input class="card-input" type="text" value={romaji} onChange={(e) => setRomaji(e.target.value)}/>
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                            Notes (optional): <br></br>
                            <textarea value={notes2} onChange={(e) => setNotes2(e.target.value)}>
                            </textarea>
                        </label>
                    </form>
                </div>
            </div>
            <button class="card-navigate-btn next-card-btn">Next card</button>
            <button onClick={() => createAndAddCard()} class="create-card-btn">Create Card</button>
            <button id="delete-card">Delete this card</button>
        </div>
    );
}

export default CardCreation;