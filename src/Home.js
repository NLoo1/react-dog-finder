import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import { DogDetails } from './routesList';
import './Home.css'

function Home() {
  const location = useLocation();
  return (
    <div className="VendingMachine">
      {/* <nav>
        {location.pathname == '/dogs' &&
            <div>
                <Link to="/dogs/duke" >Duke</Link>
                <Link to="/dogs/perry" >Perry</Link>
                <Link to="/dogs/whiskey" >Whiskey</Link>
            </div>
            
        }
      </nav> */}
      {location.pathname === '/dogs' &&
        <h1>Choose a dog</h1>}
      <Routes>
        <Route exact path='/dogs/:name' element={<DogDetails />} />
        <Route path="*" element={<Navigate to="/dogs" />} /> 
      </Routes>

      <div className="dogs">
        <img src="./duke.jpg" />
        <img src="./perry.jpg" />
        <img src="./whiskey.jpg" />
      </div>
    </div>
  );
}

export default Home