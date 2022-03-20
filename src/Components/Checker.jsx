import {useState} from "react";
import Checked from "./Checked";
import {Link} from 'react-router-dom';
function Checker(){
  const [take,setTake]= useState(undefined);
    const [initialt,setInitialt]=useState("");
    function Updatey(){
         if(take==="undefined"||take===""){
           return <Checked ans="undefined"/>
         }
         else return <Checked ans={take}/>
    }
  return(
      <>
      <div className="container">
      <div className="cennt">
      <div className="together">
      <input type="text" spellCheck="false" placeholder="Enter Track or Lyric" onChange={(e)=>{setInitialt(e.target.value)}} value={initialt}  id="fname"/>  
      <button id="search" onClick={()=>{setTake(initialt)}}>Search</button>
      </div>
      </div>
      </div>
       <Updatey/> 
      </>
  );
}
export {Checker};