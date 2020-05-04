import React, {Component} from 'react';
import CardList from './Cards/CardList'
import {robots} from './Robot/RobotsDetails'

class App extends Component {
  
  render() {
    return (
      <div>
        <h1 className="lh-title tc">RoboFriends</h1>
        <form class="pa4 black-80">
          <input id="name" class="center input-reset ba b--black-20 pa2 mb2 db w-70 " type="text" aria-describedby="name-desc"></input>
          <searchBar id={1} robots={robots}/>
        </form>
        {/* <button className="flex items-center center f1 lh-title tc bg-light-green dib br4 pa3 ma3 grow bw3 shadow-5 fw6 link dim " 
            onClick={this.robotToggleHandler}>Click me to see Awesome Robots</button> */}
        <CardList robots={robots}/>
      </div>
    
    )
    }
  }
export default App;
