import React, {Component} from 'react';
import CardList from '../Component/Cards/CardList'
import SearchBar from '../Component/Searchbar/SearchBar'
import './App.css'
import Scroll from '../Component/UI/Scroll'
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
              <Scroll>
              <CardList robots={filteredRobots}/>
              </Scroll>
            </div>
          
          )
        }
    }
  }
export default App;




