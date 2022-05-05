import React from "react";
import ReactPlayer from 'react-player'


function MainVideo({urls,title,desc,startIndex, setStartIndex}) {

    //For some reason if I don't push it into the array it will try to read the data before it is loaded
    const urlArr = [];
    
    //We will push the urls into the 
    for(let i = 0; i < urls.length; i++){
        urlArr.push(urls[i].url);
    }
    return (  
        <div className="playerContainer">
            <div className="videoContainer">
                <ReactPlayer 
                    onEnded={() => {
                        setStartIndex(startIndex+1)
                    }}
                    controls = "youtube"
                    playing={false}
                    height="100%"
                    width="100%"
                    className = 'mainVideo'
                    url={urlArr[urlArr.length-1]}
                />
                <div className="controlContainer">
                </div>
            </div>
            <div className='videoMetaData'>
                    <h1 className = "videoTitle">{title}</h1>
                    <p className = "videoDescription">{desc} </p>
            </div>
        </div>
    );
}

export default MainVideo;
