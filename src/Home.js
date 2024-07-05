import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import { DogDetails } from './routesList';
import './Home.css'
import dukeImage from './images/duke.jpg';
import perryImage from './images/perry.jpg';
import whiskeyImage from './images/whiskey.jpg';

function Home() {
  const location = useLocation();
  return (
    <div className="VendingMachine">

      {location.pathname === '/dogs' &&
        <h1>Choose a dog</h1>}
      <Routes>
        <Route exact path='/dogs/:name' element={<DogDetails />} />
        <Route path="*" element={<Navigate to="/dogs" />} /> 
      </Routes>

      <div className="dogs">
        {console.log(location.pathname)}
        <Link to="/dogs/duke" ><img src={dukeImage} /></Link>
        <Link to="/dogs/perry" ><img src={perryImage} /></Link>
        <Link to="/dogs/whiskey" ><img src={whiskeyImage} /></Link>
      </div>
    </div>
  );
}

export default Home