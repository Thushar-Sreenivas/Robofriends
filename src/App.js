import React, {Component} from 'react';
import CardList from './Cards/CardList'
import {robots} from './Robot/RobotsDetails'
import searchBar from './Searchbar/SearchBar'
class App extends Component {
  state = {
    robots: robots,
    searchValue: ''
  }

  searchResultHandler = (event) => {
      this.setState({searchValue: event.target.value})
      const filteredComponent = robots.filter(robot => {
        robot
      })
  }

  render() {
    return (
      <div>
        <h1 className="lh-title tc">RoboFriends</h1>
          <searchBar robots={this.state.robots}/>
        {/* <CardList robots={robots}/> */}
      </div>
    
    )
    }
  }
export default App;




{/* <button className="flex items-center center f1 lh-title tc bg-light-green dib br4 pa3 ma3 grow bw3 shadow-5 fw6 link dim " 
            onClick={this.robotToggleHandler}>Click me to see Awesome Robots</button> */}