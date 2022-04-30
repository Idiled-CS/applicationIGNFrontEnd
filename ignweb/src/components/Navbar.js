import React from 'react';
import '../styles/navbar.css';
import logo from "../images/logo.png"
import MenuItems from "../components/MenuItems";
import Menu from "../images/menu.png";
import {getMonthName, getWeekName} from "../helper/getDate.js";

function Navbar() {

    return ( 
        <div className = "nav">
            <div className = "leftSide">
                <div className = "logoContainer">
                    <img src = {logo}/>
                </div>
                <div className = "timeContainer">
                    <div className="weekday">{getWeekName()},</div>
                    <div className="month">{getMonthName()}</div>
                </div>
            </div>
            <div className = "rightSide">
                <MenuItems/>
                <img src = {Menu} className="dropDownMenus"/>
            </div>
        </div>
     );
}

export default Navbar;