
import Spin from './spiny.gif'

export default function Spinnery(){
    return(
        <>
        <div className='text-center mb-4'>
            <img src={Spin} alt="Loading.." style={{widht:'20px'},{display:'block'},{margin:'40px auto'}}/>
        </div>
        </>
    )
}