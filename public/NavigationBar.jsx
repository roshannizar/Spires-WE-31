'use strict';

import React, {Component} from 'react';
import './styles.css';
export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="navi-bar">
                <label className="heading">Spires</label>
                <input className="search-bar" type="text" placeholder="Search Places"/>
                <label className="heading-one right">SIGN IN</label>
                <label className="heading-one right">EXPLORE</label>
                <label className="heading-one right">CREATE POST</label>
                <label className="points right">Points: 918</label>
            </div>
        </div>;
    }
}