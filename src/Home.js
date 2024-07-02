import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import { Dog } from './routesList';
import './Home.css'

function Home() {
  const location = useLocation();
  return (
    <div className="VendingMachine">
      <nav>
        {location.pathname == '/dogs' &&
            <div>
                <Link to="/dogs/duke" >Duke</Link>
                <Link to="/dogs/perry" >Perry</Link>
                <Link to="/dogs/whiskey" >Whiskey</Link>
            </div>
            
        }
      </nav>
      {location.pathname === '/dogs' &&
        <h1>Choose a dog</h1>}
      <Routes>
        <Route path='/dogs/:name' element={<Dog />} />
        <Route path="*" element={<Navigate to="/dogs" />} /> 
      </Routes>
    </div>
  );
}

export default Home