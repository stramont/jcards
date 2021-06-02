import {React, useState, useEffect} from 'react';
import './Home.css';
import Deck from "./Deck.js";

function MyDecks(props) {

    return (
        <div class="page-content">
            <Deck />
            <Deck />
            <Deck />
            <Deck />
            <Deck />
            <Deck />
            <Deck />
        </div>
    );

}

export default MyDecks;