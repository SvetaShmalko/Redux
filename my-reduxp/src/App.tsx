import React from 'react';
import { RegForm } from './components/RegForm';
//import { Info } from './components/Info';

function App() {
  
  return (
    <div className="container pt-3">

      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          
          <RegForm />
          
          
          </div>

        <div className="col-md-auto">
          Здесь будет введенная инфа
         
          </div>
      </div>
    </div>

  );
}

export default App;
