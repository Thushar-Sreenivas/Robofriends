import React, {Component} from 'react';
import Card from './Card'

class App extends Component {
  state = {
    showCard: []
  }
   
  addRobotHandler = () => 
  render() {
    return (
      <div>
        
        <button onClick={this.addRobotHandler}>Click me to see Robots</button>
      </div>
    );
  }
}

export default App;
