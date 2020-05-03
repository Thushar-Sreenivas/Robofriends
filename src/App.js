import React, {Component} from 'react';
import Card from './Card'

class App extends Component {
  state = {
    showCard: []
  }
   
  render() {
    const card = <Card/>
    return (
      <div>
        {card}
        <button onClick={card}>Click me to see Robots</button>
      </div>
    );
  }
}

export default App;
