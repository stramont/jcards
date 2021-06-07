import React from 'react';

function CardCreation(props) {

    return(
        <div class="card-creation-container">
            <div class="template-container">
                <div class="single-side-template">
                    <h1>Front side</h1>
                    <form>
                        <label>
                            English: <br></br>
                            <input class="card-input" type="text" />
                        </label>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <label>
                            Notes (optional): <br></br>
                            <textarea>
                            </textarea>
                        </label>
                    </form>
                </div>
                <div class="single-side-template">
                    <h1>Back side</h1>
                    <form>
                        Japanese: <br></br>
                        <label>
                            <input class="card-input" type="text" />
                        </label>
                        <br></br>
                        <label>
                            Kana only (optional): <br></br>
                            <input class="card-input" type="text" />
                        </label>
                        <br></br>
                        <label>
                            Romaji (optional): <br></br>
                            <input class="card-input" type="text" />
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                            Notes (optional): <br></br>
                            <textarea>
                            </textarea>
                        </label>
                    </form>
                </div>
            </div>
            <button id="delete-card">Delete this card</button>
        </div>
    );
}

export default CardCreation;