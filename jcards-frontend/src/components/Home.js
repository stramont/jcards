import {React, useState, useEffect} from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Home.css';
import DeckIcon from "./DeckIcon.js";
import AccountIcon from "./AccountIcon.js";
import AboutIcon from "./AboutIcon.js";

import MyDecks from "./MyDecks.js";
import SavedDecks from "./SavedDecks.js";
import AccountPage from "./AccountPage.js";
import AboutPage from "./AboutPage.js";
import DeckCreation from "./DeckCreation.js";
import DeckHome from "./DeckHome.js";
import {createDeck, addToDeck, removeFromDeck, shuffle, flipCards, startAnki} from "./deck.mjs";
import {createTestDeck} from './tests.mjs';


const usedCodes = [];

/*Generates 9 digit random share code */
function codeGen() {
    let r = Math.ceil(Math.random() * 1000000000);

    while(usedCodes.includes(r)) 
        r = Math.ceil(Math.random() * 1000000000);

    usedCodes.push(r);
    return r;
}


function getMyDecks() {
    
    let createDeckBtn = createDeck();
    createDeckBtn.shareCode = "0";
    createDeckBtn.title = "Create a new deck";
    return [createDeckBtn, createDeck(), createDeck(), createDeck(), createTestDeck("test1", 800)];

}

var tempDecks = getMyDecks();

function Home(props) {
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        //console.log(currDeck);
    })

    /*
    * 0 -> My Decks   
    * 1 -> Saved Decks
    * 2 -> Account
    * 3 -> About
    * 
    * 4 -> Deck creation
    * 5 -> Deck's home screen
    */
    const [currPage, setCurrPage] = useState(0);
    const [myDecks, setMyDecks] = useState(tempDecks);

    const [currDeck, setCurrDeck] = useState(0);

    /*Mouse leave and enter functions are for collapsable sidebar */
    function handleMouseEnter() {
        setCollapsed(false);
    }

    function handleMouseLeave() {
        setCollapsed(true);
    }

    function displayCurrPage() {
        if (currPage === 0)
            return (<MyDecks pageSetter={(c)=>setCurrPage(c)} decks={myDecks} currDeckSetter = {(d) => setCurrDeck(d)}/>);
        else if (currPage === 1) {
            return (<SavedDecks />);
        }
        else if (currPage === 2) {
           return (<AccountPage />);
        }
        else if (currPage === 3) {
            return (<AboutPage />);
        }
        else if (currPage === 4) {
            return (<DeckCreation pageSetter={(c) => setCurrPage(c)} decks={myDecks} />);
        }
        else if (currPage === 5) {
            return (<DeckHome currDeck = {currDeck} />);
        }
        else
            console.log("Trouble displaying page: currPage = " + currPage);
    }


    return (
        <div class="full-height">
            <div onMouseEnter={()=>handleMouseEnter()} onMouseLeave={()=>handleMouseLeave()} id="sidebar" class="full-height row fixed">
                    <ProSidebar collapsed={collapsed}>
                        <SidebarHeader>
                            <div class="bar-titles">
                                <img src="jcards_logo.png" width="200"/>
                            </div>
                        </SidebarHeader>
                        <SidebarContent>
                            <div>
                                <Menu iconShape="circle">
                                    <SubMenu title="Decks" icon={<DeckIcon />}>
                                        <MenuItem onClick = {() => setCurrPage(0)}>My Decks</MenuItem>
                                        <MenuItem onClick={() => setCurrPage(1)}>Saved Decks</MenuItem>
                                    </SubMenu>
                                    <MenuItem onClick={() => setCurrPage(2)} icon={<AccountIcon />}>Account</MenuItem>
                                    <MenuItem onClick={() => setCurrPage(3)} icon={<AboutIcon />}>About</MenuItem>
                                </Menu>
                            </div>
                        </SidebarContent>
                    </ProSidebar>
            </div>
            <div>
                {displayCurrPage()}
            </div>
        </div>
    );

}

export default Home;