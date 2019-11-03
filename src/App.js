import React from 'react';
import Slider from './components/Slider';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1 className='title'>Memories</h1>
      <div className='slider'>
        <Slider />
      </div>
    </div>
  );
}

export default App;
