import React from 'react';
import PipelineBuilder from './components/PipelineBuilder';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl font-bold mb-4">Pipeline Builder</h1>
        <PipelineBuilder />
      </header>
    </div>
  );
}

export default App;
