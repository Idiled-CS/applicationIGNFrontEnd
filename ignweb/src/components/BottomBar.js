import React from "react";
import "../styles/bottombar.css";

//Wanted to try another way of displaying
var array = ["Kingdom Hearts III", "The Walking Dead", "God of War", "Marvel's The Avengers: Infinity War", "Super Troopers 2", "Marvel's The Defenders"];

function BottomBar() {
    return ( 
        <div className = "bottomBar">
            {array.map((arrayItem, token)=> { return (<p className="bottomItems" id={"bottomItems" + token} key={token}>{arrayItem}</p>)})}
        </div>
    );
}

export default BottomBar;