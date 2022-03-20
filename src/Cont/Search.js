import React,{ useEffect, useState} from "react";
import axios from "axios";
import Track from "./Track";
import Spinnery from "../Components/Spinnery";
export default function Search(props){
const [state1,setState1]=useState([
   {track:{key:34,title:'Loading..',subtitle:'Loading..',share:{imgg:'loood'}}},
]);
const [state2,setState2]=useState([]);
 useEffect(()=>{
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {term:`${props.in}`,locale: 'en-US', offset: '0', limit: '20'},
        headers: {
          'x-rapidapi-host': 'shazam.p.rapidapi.com',
          'x-rapidapi-key': '96e7095bdcmsh50743819712fc6dp120c19jsnf6dfc8ed91f3'
        }
      }
      axios.request(options).then(function (response) {
            setState1(response.data.tracks.hits)
            setState2({nato:response.data.tracks.hits})
      }).catch(function (error) {
          console.error(1);
      });
},[])
if(state2===undefined||Object.keys(state2).length===0)
return <Spinnery/>
else
return(
    <>
    <h2 className="text-center mb-4 mt-3">Top Songs</h2>
        <div className="row">
            {
                state1.map(s=>{return <Track  key={s.track.key} id={s.track.key} imgg={s.track.share.image}  subtitles={s.track.subtitle} trackname={s.track.title}/>})
            }
        </div>
</>
);
}

// songs/list-artist-top-tracks
// 
// 