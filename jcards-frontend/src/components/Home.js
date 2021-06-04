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

function Home(props) {
    const [collapsed, setCollapsed] = useState(true);

    /*
    * 0 -> My Decks   
    * 1 -> Saved Decks
    * 2 -> Account
    * 3 -> About
    * 
    * 4 -> Deck creation
    * 
    */
    const [currPage, setCurrPage] = useState(0);

    /*Mouse leave and enter functions are for collapsable sidebar */
    function handleMouseEnter() {
        setCollapsed(false);
    }

    function handleMouseLeave() {
        setCollapsed(true);
    }

    function displayCurrPage() {
        if (currPage === 0)
            return (<MyDecks pageSetter={(c)=>setCurrPage(c)} />);
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
            return (<DeckCreation />);
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