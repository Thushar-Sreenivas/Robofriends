import React, {Component} from 'react';
import CardList from './Cards/CardList'
import SearchBar from './Searchbar/SearchBar'
import './App.css'
class App extends Component {

  state = {
    robots: robots,
    searchValue: ''
  }

  searchResultHandler = (event) => {
      this.setState({searchValue: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return(
        robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
          )
        })
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBar searchChange={this.searchResultHandler}/>
        <CardList robots={filteredRobots}/>
      </div>
    
    )
    }
  }
export default App;




{/* <button className="flex items-center center f1 lh-title tc bg-light-green dib br4 pa3 ma3 grow bw3 shadow-5 fw6 link dim " 
            onClick={this.robotToggleHandler}>Click me to see Awesome Robots</button> */}