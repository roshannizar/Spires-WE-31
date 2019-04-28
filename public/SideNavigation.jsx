'use strict';

import React, {Component} from 'react';
import Pic from './icons/person.png';
import './styles.css';

export default class SideNavigator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="side-bar right">
            <img src={Pic} className="side-bar-img"/>
            <br/>
            <label className="side-bar-label">John Smith</label><br/><br/>
            <label className="bio-label">Travelling | Boost | Tourist</label><br/><br/>
            <label className="badge-one blue">Followers: 1.5K</label>
            <label className="badge-one silver">Membership: Silver</label><br/><br/>
            <label className="badge-one salmon">Tags: 3</label>
        </div>;
    }
}