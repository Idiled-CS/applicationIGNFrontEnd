import React from 'react';
import '../styles/menuitems.css';
import arrow from '../icons/downArrow.svg';
import search from '../images/search.png';
import biden from '../images/biden.png';

function MenusItems() {
    return (  
        <div className = "menu">
            <a href = "https://www.ign.com/news">News</a>
            <a href = "https://www.ign.com/videos">Videos</a>
            <a href = "https://www.ign.com/reviews">Reviews</a>
            <a href = "https://www.ign.com/shows">Shows</a>
            <a href = "https://www.ign.com/wikis">Wikis</a>

            <a className = "more" href = "#" >More</a>
            <img className = "arrow" src = {arrow}/>
            <img className = "search" src = {search}/>
            <img className = "biden" src = {biden}/>


        </div>
    );
}

export default MenusItems;