import { Link } from "react-router-dom";
 export default function Track(props){
     const myStyle={
         width:"60px",
         height:"60px",
         borderRadius:"50%",
         border:"2px solid white"
     };
     return(
     <>
         <div className="col-md-4">
             <div className="card mb-4 shadow-lg">
                  <div id="hoov" className="card-bodyy">
                  <Link className="think" to={`lyrics/track/${props.id}`}>
                      <div className="tt">
                       <img src={props.imgg} style={myStyle}/>
                       <div className="content">
                       <b><h5>{props.trackname}</h5></b>
                       <p className="card-text">{props.subtitles}</p>
                       </div>
                       </div>
                       </Link>
                  </div>
             </div>
         </div>
         </>
     )
 }
