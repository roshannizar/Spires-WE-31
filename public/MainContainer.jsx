'use strict';

import React, {Component} from 'react';
import Container from './Container';
import './styles.css';

export default class MainContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="main">
            <div className="container">
                <br/>
                <Container/>
            </div>
        </div>;
    }
}