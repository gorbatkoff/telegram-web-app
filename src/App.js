import { React, useEffect } from 'react';

import './App.css';


function App() {

  useEffect(() => {
    tg.ready()
  }, [])




  return (
    <div className="App">
      <h1>work</h1>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
