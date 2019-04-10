'use strict';

import React, {Component} from 'react';
import './styles.css';
import Person from './icons/person.png';
import Driving from './icons/driving.png';
import Car from './icons/car.png';
import Pic from './icons/itc.jpg';
export default class Container extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="main-container-sub">
                <div className="heading-three">
                    <img src={Person} className="prof-pic left"/>
                    <label className="customer-name name-dark">John Smith</label>
                    <img src={Car} className="prof-pic right"/>
                    <img src={Driving} className="prof-pic right"/>
                    <label className="label-style-two right">Colombo, Sri-Lanka</label>
               </div>
                <br/><br/><br/>
                <div className="sub-detail">
                    <label className="heading-description">Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity</label>
                    <br/><br/><br/><br/><br/>
                    <button className="button-two">GET OFFER</button>
                    <label className="posted right">Posted on: 2019/04/4</label>
                </div>
                <div className="detail">
                    <img src={Pic} className="place-pick right"/>
                </div>
            </div>
            <br/>
            <div className="main-container-sub">
               <div className="heading-three">
                    <img src={Person} className="prof-pic left"/>
                    <label className="customer-name name-dark">Tom Kernal</label>
                    <img src={Car} className="prof-pic right"/>
                    <img src={Driving} className="prof-pic right"/>
                    <label className="label-style-two right">Ella, Sri-Lanka</label>
                </div>
                <br/><br/><br/>
                <div className="sub-detail">
                    <label className="heading-description">Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity</label>
                    <br/><br/><br/><br/><br/>
                    <button className="button-two">GET OFFER</button>
                    <label className="posted right">Posted on: 2019/03/31</label>
                </div>
                <div className="detail">
                    <img src={Pic} className="place-pick right"/>
                </div>
            </div>
            <br/>
            <div className="main-container-sub">
                <div className="heading-three">
                    <img src={Person} className="prof-pic left"/>
                    <label className="customer-name name-dark">Thomas Bond</label>
                    <img src={Car} className="prof-pic right"/>
                    <img src={Driving} className="prof-pic right"/>
                    <label className="label-style-two right">Jaffna, Sri-Lanka</label>
                </div>
                <br/><br/><br/>
                <div className="sub-detail">
                    <label className="heading-description">Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity Such as nice place to visit and able to purchase goods without any problems, all kind of faclities are available for liesure activity</label>
                    <br/><br/><br/><br/><br/>
                    <button className="button-two">GET OFFER</button>
                    <label className="posted right">Posted on: 2019/02/01</label>
                </div>
                <div className="detail">
                   <img src={Pic} className="place-pick right"/>
                </div>
            </div>
            <br/><br/><br/>
        </div>;
    }
}