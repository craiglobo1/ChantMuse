import * as React from 'react';

export interface INavbarProps {
}

export default class Navbar extends React.Component<INavbarProps> {
  public render() {
    return (
      <div className='Navbar'>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
              <a className="text-gray-300 hover:text-white">Editor</a>
              <a className="text-gray-300 hover:text-white">Scores</a>
              <a className="text-blue-300 hover:text-white">About</a>
          </div>
        </nav>
      </div>
    );
  }
}
