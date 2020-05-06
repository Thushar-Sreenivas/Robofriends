import React, {Component} from 'react';
import CardList from '../Component/Cards/CardList'
import SearchBar from '../Component/Searchbar/SearchBar'
import './App.css'
import Scroll from '../Component/UI/Scroll'
import ErrorBoundary from '../HOC/ErrorBoundary'
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
class App extends Component {

  componentDidMount() {
    this.props.robotDataFetch()
  }
  
  render() {
    
    let filteredRobots = this.state.robots.filter(robot => {
      return(
        robot.name.toLowerCase().includes(this.props.searchResult.toLowerCase())
          )
        })
        if (this.state.robots.length === 0) {
          return <h1>Loading</h1>
        }
        else {
          return (
            <div className="tc">
              <h1 className="f1">RoboFriends</h1>
              <SearchBar searchChange={this.props.onSearchChange}/>
              <Scroll>
                <ErrorBoundary>
                  <CardList robots={filteredRobots}/>
                </ErrorBoundary>
              </Scroll>
            </div>
          
          )
        }
    }
  }

const mapStateToProps = state => {
  return {
    searchResult: state.searchValue
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(actionCreator.onSearchChange(event.target.value)),
    robotDataFetch: () => dispatch(actionCreator.robotsData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)



