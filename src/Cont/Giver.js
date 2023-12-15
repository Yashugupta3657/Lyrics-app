import React,{ useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";
import Track from "./Track";
import Spinnery from "../Components/Spinnery";
export default function Giver(props){
const [state1,setState1]=useState([
    {key:34,title:'Loading..',subtitle:'Loading..',share:{imgg:'loood'}}
]);
const [state2,setState2]=useState([]);
 useEffect(()=>{
    document.title = "LyricsFinder"
    const options = {
        method: 'GET',
        url: 'https://shazam-api7.p.rapidapi.com/songs/list-recommendations',
        params: {  id: '546651160',
        limit: '50'},
        headers: {
            'X-RapidAPI-Key': '595f09f727msh50fa8d147b97c40p164a56jsnd2bf5ff54799',
            'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com'
        }
      }
      axios.request(options).then(function (response) {
          setState1(response.data.tracks)
          setState2({nato:response.data.tracks})
      }).catch(function (error) {
          console.error(error);
      });
},[])
if(state2===undefined||Object.keys(state2).length==0)
return <Spinnery/>
else return (
    <>
    <h2 className="text-center mb-4 mt-3" style={{fontWeight:"900",color:"white"}}>Songs</h2>
        <div className="row">
            {
                state1.map(s=>{return <Track  key={s.key} id={s.key} imgg={s.share.image} subtitles={s.subtitle} trackname={s.title}/>})
            }
        </div>
</>
)
}

// songs/list-artist-top-tracks