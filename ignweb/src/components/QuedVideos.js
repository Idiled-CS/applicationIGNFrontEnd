import React from 'react';
import '../styles/que.css';

function QuedVideos({vidArr, startIndex, setStartIndex, count, setCount}) {

    //We got the time as seconds, so we just have to change the seconds into HH:MM::SS order
    const convertTime = (sec) =>{
        var h = Math.floor(sec/ 3600).toString();
        var m = Math.floor(sec%3600/60).toString();
        var s = Math.floor(sec%60).toString().padStart(2, '0');

        if(Math.floor(sec/3600) == 0)
            return `${m}:${s}`;
        else
            return `${h}:${m}:${s}`;
    }

    const vidObj = [];


    for(let i = 0; i < vidArr.length; i++){
        vidObj.push({
            thumbnail: vidArr[i].thumbnails[2].url,
            title: vidArr[i].metadata.title,
            time: vidArr[i].metadata.duration
        })
    }

    console.log(vidObj[4])
    return (
        <div className="queue">
            {
                vidObj.map((vid,index)=>{
                    if(index == 0)
                        return
                    else{
                        return(
                            <div id = {"vid"+index} className="videoList">
                                <div className= "leftSide">
                                    <img onClick = {()=>{setStartIndex(startIndex+index)}} src = {vid.thumbnail}/>
                                    <div className="time">{convertTime(vid.time)}</div>
                                </div>
                                <div className= "rightSide">
                                    <div className="title">{vid.title}</div>
                                </div>
                                
                            </div>
                            
                        )
                    }
                })
            }
            <span className="loadMore" onClick={()=>setCount(count+4)}>Load More</span>
        </div>
    );
}

export default QuedVideos;