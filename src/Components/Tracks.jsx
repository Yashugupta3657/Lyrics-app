import react, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Spinnery from "./Spinnery";
export default function Tracks(props){
    var flag=false;
    const styl={
        height:'50px',
        width:'50px',
        borderRadius:'50%',
        border:'2px solid white',
    }
    const bb=0;
    const [check,setCheck]=useState(0);
    const {id}=useParams();
    const [detail,setDetail]=useState({data:{}});
    const [lyr,setLyr]=useState([]);
    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/songs/get-details',
            params: {key: id, locale: 'en-US'},
            headers: {
              'x-rapidapi-host': 'shazam.p.rapidapi.com',
              'x-rapidapi-key': '96e7095bdcmsh50743819712fc6dp120c19jsnf6dfc8ed91f3'
            }
          };
          
          axios.request(options).then(function (response) {
            setDetail({data:response.data});
               setLyr(response.data.sections[1].text);
              console.log(response.data.sections[1].text);
              console.log(response.data)
              console.log(lyr);
          }).catch(function (error) {
              console.error(error);
              setCheck(1);
              console.log(1111);
          });
    },[])
    if(Object.keys(detail.data).length===0){
        return <Spinnery/>
    }
    else{
        if(detail.data.sections[3]===undefined||detail.data.subtitle==undefined||lyr===undefined||detail.data.sections[2].youtubeurl===undefined){
            return<> 
            <Link to="/" className="btn btn-outline-light  btn-lg mb-4">Back</Link>
            <h1 style={{color:'white',textAlign:'center'}}>Data Not Found! Sorry For Inconvenience.</h1>
        </>
        }
        else{
        return (
            <>
             <Link to="/" className="btn btn-outline-light  btn-md mb-4">Back</Link>
           <div className="card text-white bg-light ">
               <h4 className="card-header bg-black">
                   {detail.data.title?detail.data.title:'Data Not Available'} by {' '} {' '}
                   <span className="text-secondary">{detail.data.subtitle?detail.data.subtitle:'Data not Available'}</span>
                   <span style={{marginLeft:'10px'}}><img style={styl} src={detail.data.sections[3].avatar}/></span>
               </h4>
               <div className="card-body">
                   <div className="card-texty">
                   {lyr.map(data => (
                 <div>
                <p>{data?data:<br/>}</p>
                </div>
            ))}
                </div>
                   </div>
           </div>
    
             <div>
             <ul className="list-group-item bg-black">
                 <li style={{color:'white',padding:'5px',listStyleType:'none',textAlign:'center'}} >
                 <iframe id="player" type="text/html" width="640" height="390" src={detail.data.sections[2].youtubeurl.actions[0].uri} frameborder="0"></iframe>
                 {/*<a style={{color:'white'}} target="_blank" href={detail.data.sections[2].youtubeurl.actions[0].uri}>Watch video on Youtube</a> */}
                 </li>
                 <li style={{color:'white',padding:'5px',listStyleType:'none',textAlign:'center'}}>
                     Music type : {detail.data.genres.primary?detail.data.genres.primary:'not found'}
                 </li>
             </ul>
             </div>
                     
            </>
          )
        }
    }
}