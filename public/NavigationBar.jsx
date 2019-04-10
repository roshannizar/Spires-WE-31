'use strict';

import React, {Component} from 'react';
import './styles.css';
import MainContainer from './MainContainer';
import SideNavigator from './SideNavigation';

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="navi-bar">
                <label className="heading">SPIRES</label>
                <input className="search-bar" type="text" placeholder="Search Places, Hotels"/>
                <label className="heading-one right" onClick={()=> {document.location.href="./SignIn.html";}}>SIGN IN</label>
                <label className="heading-one right">EXPLORE</label>
                <label className="heading-one right">CREATE POST</label>
                <label className="points right">Points: 918C</label>
            </div>
            <div className="sub-handler">
                <label className="heading-two">News Feeds</label>
                    <div className="sub-menu">
                        <a href="" className="link-style">CATEGORIES</a>
                        <a href="" className="link-style">TAGS</a>
                        <a href="" className="link-style">ABOUT US</a>
                        <a href="" className="link-style">CONTACT US</a>
                    </div>
            </div>
            <SideNavigator/>
            <MainContainer/>
        </div>;
    }
}