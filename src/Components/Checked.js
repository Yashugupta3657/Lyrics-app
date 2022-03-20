import Giver from "../Cont/Giver";
import Search from "../Cont/Search";
export default function Checked(props){
    function Update(){
    if(props.ans===undefined||props.ans===""){
      return <Giver/>;
    }
    else{
        return <Search in={props.ans}/>;
    }
}
    return (
        <>
             <Update/>
        </>
    )
}