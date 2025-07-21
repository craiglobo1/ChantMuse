import * as React from 'react';
import { Link } from 'react-router-dom';

export interface INavbarProps {
}

export default class Navbar extends React.Component<INavbarProps> {
  public render() {
    return (
      <div className='Navbar'>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
              <a><Link to="/">Editor</Link></a>
              <a><Link to="/scores">Scores</Link></a>
              <a><Link to="/about">About</Link></a>
          </div>
        </nav>
      </div>
    );
  }
}
