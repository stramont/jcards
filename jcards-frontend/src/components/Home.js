import {React, useState, useEffect} from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Home.css';
import DeckIcon from "./DeckIcon.js";
import AccountIcon from "./AccountIcon.js";
import AboutIcon from "./AboutIcon.js";

function Home(props) {
    const [collapsed, setCollapsed] = useState(true);

    /*Mouse leave and enter functions are for collapsable sidebar */
    function handleMouseEnter() {
        setCollapsed(false);
    }

    function handleMouseLeave() {
        setCollapsed(true);
    }

    return (
        <div class="full-height">
            <div onMouseEnter={()=>handleMouseEnter()} onMouseLeave={()=>handleMouseLeave()} id="sidebar" class="full-height row">
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
                                        <MenuItem>My Decks</MenuItem>
                                        <MenuItem>Saved Decks</MenuItem>
                                    </SubMenu>
                                    <MenuItem icon={<AccountIcon />}>Account</MenuItem>
                                    <MenuItem icon={<AboutIcon />}>About</MenuItem>
                                </Menu>
                            </div>
                        </SidebarContent>
                    </ProSidebar>
            </div>
            <div class="row">
                page content
            </div>
        </div>
    );

}

export default Home;