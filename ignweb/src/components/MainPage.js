import React, {useState, useEffect, useRef} from 'react';
import MainVideo from './MainVideo.js';
import QuedVideos from './QuedVideos';
import '../styles/mainpage.css';
import axios from 'axios';

function MainPage() {
    //There is a start index and count for pagnation
    const [startIndex, setStartIndex] = useState(0);
    const [count, setCount] = useState(5);
    const [allVid, setAllVid] = useState([]);

    //This it to pass through values that we need for curr video player
    const currVid = useRef({
        urls:'',
        title:'',
        desc:'',

    })



    //Api call
    const getVidAPI = async (url) => {
        try{
            const {data} = await axios.get(url);
            return data;
        } catch(e){
            console.log(e);
        }
    }

    //Function for getting video data
    const fetchVidData = () => {
        getVidAPI("http://localhost:8080/?startIndex="+ startIndex +"&count="+ count)
            .then(({data})=>{
                currVid.current = {
                    urls: data[0].assets,
                    title: data[0].metadata.title,
                    desc: data[0].metadata.description
                };
                setAllVid(data);
            })
    }

    //useEffect will only be called when startIndex is changed (when video is changed basically)
    useEffect(()=>{
        fetchVidData()
    }, [startIndex,count]) 

    console.log(allVid);

    return ( 
        <div className='mainpage'>
            <div className='leftSide'>
                <MainVideo
                    startIndex = {startIndex}
                    setStartIndex = {setStartIndex}
                    urls={currVid.current.urls}
                    title= {currVid.current.title} 
                    desc={currVid.current.desc} 
                />

            </div>
            <div className='rightSide'>
                <QuedVideos className = "list" count = {count} setCount = {setCount} startIndex = {startIndex} setStartIndex = {setStartIndex} vidArr = {allVid}/>
            </div>

            <div className='bottom'>
                <QuedVideos className = "list" count = {count} setCount = {setCount} startIndex = {startIndex} setStartIndex = {setStartIndex} vidArr = {allVid}/>
            </div>
        </div>
    );
}

export default MainPage;