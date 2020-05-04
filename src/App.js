import React, {Component} from 'react';
import CardList from './Cards/CardList'
import SearchBar from './Searchbar/SearchBar'
import './App.css'

class App extends Component {

  state = {
    robots: [],
    searchValue: ''
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({robots: user}))
  }
  searchResultHandler = (event) => {
      this.setState({searchValue: event.target.value})
  }
  render() {
    
    let filteredRobots = this.state.robots.filter(robot => {
      return(
        robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
          )
        })
        if (this.state.robots.length === 0) {
          return <h1>Loading</h1>
        }
        else {
          return (
            <div className="tc">
              <h1 className="f1">RoboFriends</h1>
              <SearchBar searchChange={this.searchResultHandler}/>
              <CardList robots={filteredRobots}/>
            </div>
          
          )
        }
    }
  }
export default App;




