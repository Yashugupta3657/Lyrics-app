
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import {Checker} from './Components/Checker';
import Navbar from './Components/Navbar';
import Tracks from './Components/Tracks'
function App() {

  return ( 
       <>
         <Navbar/>    
         <div className="container">
         <Routes>
         <Route exact path="/"  element={<Checker/>}/>
         <Route exact path="lyrics/track/:id" element={<Tracks/>}/>
         </Routes>
         </div>
    </>
  );
}

export default App;

// <div className="App">
// <Navbar/>
// <div className="container">
// <Checker/>
// </div>
// </div>
// {/* <Route exact path="/search"  element={<Search in="god"/>}/> */}
// <Routes>
// <Route exact path="/"  element={<Checker/>}/>
// </Routes>