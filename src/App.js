import React from 'react';
import Card from './Card'

const addRobotHandler = () => {
  return (
      <Card/>
  )  
}
function App() {
  return (
    <div>
      <button onClick={() => addRobotHandler()}>Click me to see Robots</button>
      
    </div>
  );
}

export default App;
