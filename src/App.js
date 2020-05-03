import React, {Component} from 'react';
import Card from './Card'
import {robots} from './robotsDetails'

class App extends Component {
  
  state = {
    showRobot: false 
  }

  createCard = () => {
    let cardCreator = []
    for (let index = 0; index < 10; index++) {
        cardCreator.push(<Card id={robots[index].id} name={robots[index].name} email={robots[index].email}/>)      
    }
    return cardCreator
  }
  robotToggleHandler = () => this.setState({showRobot: true})

  }
  render() {
    return (
      <div>
        <button onClick={this.robotToggleHandler}>Click me to see Awesome Robots</button>
        {/* {this.state.showRobot?this.createCard():null} */}
      </div>
    
    )
    }
export default App;
