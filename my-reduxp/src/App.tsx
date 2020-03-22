import React from 'react';
import { RegForm } from './components/RegForm';

function App() {
  return (
    <div className="container pt-3">

      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          здесь будет форма регистрации
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
