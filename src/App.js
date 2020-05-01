import React, {Component} from 'react';
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'



class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearch = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={this.onSearch}/>
      <CardList robots={filteredRobots}/>
      </div>
    );
  }
};

export default App;