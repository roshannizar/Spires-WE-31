'use strict';

import React, {Component} from 'react';
import './styles.css';

export default class SideNavigator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="side-bar right">
            <button hidden className="button-one">POST ADVERTISEMENT</button>
        </div>;
    }
}