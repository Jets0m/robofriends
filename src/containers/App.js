import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'



class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(users => {this.setState({robots: users})});
  }

  onSearch = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return !robots.length ?
     <h1 className="tc">LOADING...</h1> :
     (
      <div className="tc">
      <div className="header">
        <h1 className="">RoboFriends</h1>
        <SearchBox searchChange={this.onSearch}/>
      </div>
      <CardList robots={filteredRobots}/>
      </div>
    );
  }
};

export default App;
