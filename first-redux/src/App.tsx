import React from 'react';
import './App.css';
import NewUser from './components/NewUser';
import Users from './components/Users';
//import Users from './components/Users';

function App() {
  return (
    
    <div className="container pt-3">

      <div className="row justify-content-md-center">
        <div className="col-md-auto">       
        <NewUser />
          </div>

        <div className="col-md-auto">
          <Users />
          </div>
      </div>
    </div>
  );
}

export default App;
