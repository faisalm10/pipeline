import React, { useState } from 'react';
import ReactFlow, { 
  addEdge, 
  Background, 
  Controls, 
  MiniMap, 
  ReactFlowProvider, 
} from 'react-flow-renderer';

const initialElements = [];

const PipelineBuilder = () => {
  const [elements, setElements] = useState(initialElements);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onLoad = (rfi) => setReactFlowInstance(rfi);

  const addNode = (type) => {
    const id = (elements.length + 1).toString();
    const newNode = {
      id,
      data: { label: `${type} Node` },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
      type: 'default',
      className: type === 'source' ? 'bg-blue-200' : 'bg-green-200'
    };
    setElements((es) => es.concat(newNode));
  };

  return (
    <div className="h-screen">
      <ReactFlowProvider>
        <div className="flex justify-around p-4">
          <button 
            onClick={() => addNode('source')} 
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Source Node
          </button>
          <button 
            onClick={() => addNode('destination')} 
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Destination Node
          </button>
        </div>
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          onLoad={onLoad}
          deleteKeyCode={46} 
          style={{ width: '100%', height: '90%' }}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default PipelineBuilder;
