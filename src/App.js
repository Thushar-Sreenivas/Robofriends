import React, {Component} from 'react';
import Card from './Card'

class App extends Component {
   
  addRobotHandler = () => {
    return (
      <Card/>
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.addRobotHandler}>Click me to see Robots</button>
      </div>
    );
  }
}

export default App;
