import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='Navbar'>
      <nav className="bg-gray-800 p-4" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        
        <div style={{cursor: 'pointer', paddingBottom : "20px"}} className='flex justify-between items-center' >
             <img id="logo" src='/assets/ChantMuseLogoV2.png' alt="ChantMuse" style={{maxWidth: '20%', height: 'auto'}}  onClick={() => navigate('/')} />
        </div>


        <div className="container flex justify-between items-center" style={{width : "8em"}} >
          <Link className='navbar-link' to="/scores">Scores</Link>
          <Link className='navbar-link' to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
}
